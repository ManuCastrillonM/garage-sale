import { configureStore } from '@reduxjs/toolkit';
import featuredProductReducer from '../features/featuredProductSlice';
import shoppingCartReducer from '../features/shoppingCartSlice';

export default configureStore({
  reducer: {
    featuredProduct: featuredProductReducer,
    shoppingCart: shoppingCartReducer,
  },
});
