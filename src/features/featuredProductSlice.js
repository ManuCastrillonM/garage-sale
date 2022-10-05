import { createSlice } from '@reduxjs/toolkit';

export const featuredProductSlice = createSlice({
  name: 'FeaturedProduct',
  initialState: {
    product: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = { ...action.payload };
    },
    clearProduct: (state) => {
      state.product = null;
    },
  },
});

export const { setProduct, clearProduct } = featuredProductSlice.actions;

export default featuredProductSlice.reducer;
