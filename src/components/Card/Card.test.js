import { render, screen } from '@testing-library/react';
import Card from './Card';
import wrappedElement from '../../utils/test-utils';

const props = {
  categories: ['Random'],
  dateAvailable: '01/08/2022',
  price: '40000',
  imageUrl:
    'https://www.nationalgeographic.com.es/medio/2020/09/07/vicugna-pacos_f31442a8_550x807.jpg',
  name: 'Alpaca',
  status: 'available',
  url: 'https://es.wikipedia.org/wiki/Vicugna_pacos',
};

test('renders a card component', () => {
  render(wrappedElement(<Card data={props} />));
  const linkElement = screen.getByText('$40000 COP');
  expect(linkElement).toBeInTheDocument();
});
