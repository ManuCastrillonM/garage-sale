import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders the naviagation component', () => {
  render(<Navigation />);
  const linkElement = screen.getByTestId('nav-cart-cta');
  expect(linkElement).toBeInTheDocument();
});
