import { render, screen } from '@testing-library/react';
import ProductsBanner from './ProductsBanner';

test('renders the products banner', () => {
  render(<ProductsBanner />);
  const modal = screen.getByTestId('coming-soon');
  expect(modal).toBeInTheDocument();
});
