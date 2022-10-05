import { render, screen } from '@testing-library/react';
import ProductModal from './ProductModal';

test('renders the product modal', () => {
  const product = {
    name: 'product',
    categories: [],
    status: 'available',
  };
  render(<ProductModal {...product} />);
  const modal = screen.getByTestId('product-modal');
  expect(modal).toBeInTheDocument();
});
