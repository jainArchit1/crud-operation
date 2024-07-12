import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id, name } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items = [
          ...state.items.slice(0, index),
          { id, name },
          ...state.items.slice(index + 1),
        ];
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
