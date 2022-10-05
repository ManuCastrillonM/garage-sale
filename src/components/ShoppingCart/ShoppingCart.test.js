import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('renders the shopping component', () => {
  render(<ShoppingCart handleClose={() => { }} isOpen />);
  const shoppingCartTitle = screen.getByText(/Productos que te interesan/i);
  expect(shoppingCartTitle).toBeInTheDocument();
});

test('calls the handleClose function when the close button is clicked', () => {
  const handleCloseFn = jest.fn();

  render(<ShoppingCart handleClose={handleCloseFn} isOpen />);
  const closeButton = screen.getByTestId('close-shopping-cart-btn');
  closeButton.click();
  expect(handleCloseFn).toHaveBeenCalled();
});
