import { render, screen } from '@testing-library/react';
import CustomSelect from './CustomSelect';
import wrappedElement from '../../utils/test-utils';

test('renders the custom select', () => {
  const items = ['test1', 'test2', 'test3'];
  const selectedItems = ['test1'];
  const mockOnChange = jest.fn();

  render(wrappedElement(
    <CustomSelect items={items} selectedItems={selectedItems} onSelectChange={mockOnChange} />,
  ));

  const selectItems = screen.getAllByRole('checkbox');
  expect(selectItems).toHaveLength(items.length);

  selectItems[0].click();
  expect(mockOnChange).toHaveBeenCalledTimes(1);

  const checkedElements = screen.getAllByRole('checkbox', { checked: true });
  expect(checkedElements).toHaveLength(selectedItems.length);
});
