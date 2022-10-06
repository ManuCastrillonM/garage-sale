import { render, screen } from '@testing-library/react';
import ImageGallery from './ImageGallery';

const images = [
  'url',
  'other url',
];

const name = 'product name';

test('renders a list of cards for the items provided', () => {
  render(<ImageGallery images={images} name={name} />);
  const modal = screen.getByTestId('gallery');
  expect(modal).toBeInTheDocument();
});
