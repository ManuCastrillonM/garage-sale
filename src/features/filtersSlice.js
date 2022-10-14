import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'Filters',
  initialState: {
    availability: 'available',
    order: 'alphabetical-az',
    categories: [],
  },
  reducers: {
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setAvailability, setOrder, setCategories } = filtersSlice.actions;

export default filtersSlice.reducer;
