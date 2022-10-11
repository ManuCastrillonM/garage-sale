import { render, screen } from '@testing-library/react';
import Filters from './Filters';

test('renders the filters', () => {
  render(<Filters />);

  const categoryFilters = screen.getByText('categoria');
  expect(categoryFilters).toBeInTheDocument();

  const availabilityFilters = screen.getByText('estado');
  expect(availabilityFilters).toBeInTheDocument();

  const orderFilters = screen.getByText('orden');
  expect(orderFilters).toBeInTheDocument();
});
