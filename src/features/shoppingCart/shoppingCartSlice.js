import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'counter',
  initialState: {
    elementsCount: 0,
    elements: [],
  },
  reducers: {
    increment: (state) => {
      state.elementsCount += 1;
    },
    decrement: (state) => {
      state.elementsCount -= 1;
    },
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    removeElement: (state, action) => {
      const index = state.elements.findIndex((element) => element.id === action.payload);
      state.elements.splice(index, 1);
    },
  },
});

export const {
  increment, decrement, addElement, removeElement,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
