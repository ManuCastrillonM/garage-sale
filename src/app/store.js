import { configureStore } from '@reduxjs/toolkit';
import featuredProductReducer from '../features/featuredProductSlice';
import filtersSliceReducer from '../features/filtersSlice';
import shoppingCartReducer from '../features/shoppingCartSlice';
import { categoriesOptions } from '../components/Filters/FiltersData';

const persistedState = localStorage.getItem('reduxState');
let parsedState = {};

if (persistedState) {
  parsedState = JSON.parse(persistedState);
  parsedState.filters.categories = parsedState.filters.categories.filter(
    (category) => categoriesOptions.indexOf(category) > -1,
  );
}

const store = configureStore({
  preloadedState: parsedState,
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
