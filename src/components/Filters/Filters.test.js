import { render, screen } from '@testing-library/react';
import Filters from './Filters';
import wrappedElement from '../../utils/test-utils';

test('renders the filters', () => {
  render(wrappedElement(<Filters />));

  const categoryFilters = screen.getByText('categorias');
  expect(categoryFilters).toBeInTheDocument();

  const availabilityFilters = screen.getByText('disponibilidad');
  expect(availabilityFilters).toBeInTheDocument();

  const orderFilters = screen.getByText('orden');
  expect(orderFilters).toBeInTheDocument();
});
