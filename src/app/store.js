import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
