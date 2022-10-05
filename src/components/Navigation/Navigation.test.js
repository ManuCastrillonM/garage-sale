import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import wrappedElement from '../../utils/test-utils';

test('renders the naviagation component', () => {
  render(wrappedElement(<Navigation />));
  const linkElement = screen.getByTestId('nav-cart-cta');
  expect(linkElement).toBeInTheDocument();
});
