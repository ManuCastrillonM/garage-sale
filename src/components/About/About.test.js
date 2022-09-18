import { render, screen } from '@testing-library/react';
import About from './About';

test('renders the about component', () => {
  render(<About />);
  const title = screen.getByText(/Como comprar/);
  expect(title).toBeInTheDocument();
});
