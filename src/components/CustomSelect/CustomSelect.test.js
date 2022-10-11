import { render, screen } from '@testing-library/react';
import CustomSelect from './CustomSelect';

test('renders the custom select', () => {
  const items = ['test1', 'test2', 'test3'];
  const mockOnChange = jest.fn();

  render(<CustomSelect items={items} onChange={mockOnChange} />);

  const selectItems = screen.getAllByRole('checkbox');
  expect(selectItems).toHaveLength(items.length);

  selectItems[0].click();
  expect(mockOnChange).toHaveBeenCalledTimes(1);
});
