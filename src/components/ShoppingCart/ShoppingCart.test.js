import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import wrappedElement from '../../utils/test-utils';

test('renders the shopping component', () => {
  render(wrappedElement(<ShoppingCart handleClose={() => { }} isOpen />));

  const shoppingCartTitle = screen.getByText(/Productos que te interesan/i);
  expect(shoppingCartTitle).toBeInTheDocument();
});

test('calls the handleClose function when the close button is clicked', () => {
  const handleCloseFn = jest.fn();

  render(wrappedElement(<ShoppingCart handleClose={handleCloseFn} isOpen />));

  const closeButton = screen.getByTestId('close-shopping-cart-btn');
  closeButton.click();
  expect(handleCloseFn).toHaveBeenCalled();
});
