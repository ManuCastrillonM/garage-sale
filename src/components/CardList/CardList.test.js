import { render } from '@testing-library/react';
import CardList from './CardList';

const items = [{ name: 'name1' }, { name: 'name2' }];

test('renders a list of cards for the items provided', () => {
  const { container } = render(<CardList items={items} />);
  expect(container.childNodes[0].childNodes.length).toBe(items.length);
});
