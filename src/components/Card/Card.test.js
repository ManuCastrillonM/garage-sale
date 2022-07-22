import { render, screen } from '@testing-library/react';
import Card from './Card';

const props = {
  category: 'Random',
  dateAvailable: '01/08/2022',
  description: 'Despiadada y cool',
  imageUrl:
    'https://www.nationalgeographic.com.es/medio/2020/09/07/vicugna-pacos_f31442a8_550x807.jpg',
  name: 'Alpaca',
  status: 'available',
  url: 'https://es.wikipedia.org/wiki/Vicugna_pacos',
};

test('renders a card component', () => {
  render(<Card {...props} />);
  const linkElement = screen.getByText(/Despiadada y cool/);
  expect(linkElement).toBeInTheDocument();
});
