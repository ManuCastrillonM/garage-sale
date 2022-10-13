import { configureStore } from '@reduxjs/toolkit';
import featuredProductReducer from '../features/featuredProductSlice';
import filtersSliceReducer from '../features/filtersSlice';
import shoppingCartReducer from '../features/shoppingCartSlice';

const persistedState = localStorage.getItem('reduxState');

const store = configureStore({
  preloadedState: persistedState ? JSON.parse(persistedState) : {},
  reducer: {
    filters: filtersSliceReducer,
    featuredProduct: featuredProductReducer,
    shoppingCart: shoppingCartReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
