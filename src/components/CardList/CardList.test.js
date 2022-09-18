import { render } from '@testing-library/react';
import CardList from './CardList';

const items = [
  { 
    fields: {
      name: 'Cama',
      categories: ['Habitación']
    },
    sys: {
      id: 1
    }
  },
  {
    fields: {
      name: 'Olla',
      categories: ['Cocina']
    },
    sys: {
      id: 2
    }
  }
];

test('renders a list of cards for the items provided', () => {
  const { container } = render(<CardList items={items} />);
  expect(container.childNodes[0].childNodes.length).toBe(items.length);
});
