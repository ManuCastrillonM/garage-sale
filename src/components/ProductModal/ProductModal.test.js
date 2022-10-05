import { render, screen } from '@testing-library/react';
import ProductModal from './ProductModal';
import wrappedElement from '../../utils/test-utils';

test('renders the product modal', () => {
  const product = {
    name: 'product',
    categories: [],
    status: 'available',
  };
  render(wrappedElement(<ProductModal {...product} />));
  const modal = screen.getByTestId('product-modal');
  expect(modal).toBeInTheDocument();
});
