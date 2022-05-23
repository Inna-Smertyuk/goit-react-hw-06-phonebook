import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    contactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, contactFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
