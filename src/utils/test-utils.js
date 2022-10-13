import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const wrappedElement = (element) => {
  const initialState = {
    shoppingCart: { elements: [] },
    featuredProduct: { product: null },
    filters: {
      categories: [],
      availability: 'available',
      order: 'alphabetical-az',
    },
  };
  const mockStore = configureStore(initialState);
  const store = mockStore(initialState);

  return (<Provider store={store}>{element}</Provider>);
};

export default wrappedElement;
