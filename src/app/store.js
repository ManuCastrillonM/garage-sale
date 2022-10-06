import { configureStore } from '@reduxjs/toolkit';
import featuredProductReducer from '../features/featuredProductSlice';
import shoppingCartReducer from '../features/shoppingCartSlice';

const persistedState = localStorage.getItem('reduxState');

const store = configureStore({
  preloadedState: persistedState ? JSON.parse(persistedState) : {},
  reducer: {
    featuredProduct: featuredProductReducer,
    shoppingCart: shoppingCartReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
