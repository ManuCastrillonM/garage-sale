import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'ShoppingCart',
  initialState: {
    elements: [],
  },
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    removeElement: (state, action) => {
      const index = state.elements.findIndex((element) => element === action.payload);
      state.elements.splice(index, 1);
    },
  },
});

export const { addElement, removeElement } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
