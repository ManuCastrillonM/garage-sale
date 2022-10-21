import './CustomSelect.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function CustomSelect({ items, selectedItems, onSelectChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const onItemChange = (event) => {
    const newItemList = event.target.checked
      ? [...selectedItems, event.target.value]
      : selectedItems.filter((item) => item !== event.target.value);

    onSelectChange(newItemList);
  };

  return (
    <div className="cst-select">
      <span className="cst-select__label">categorias</span>
      <button type="button" className="cst-select__button" onClick={() => setIsOpen(!isOpen)}>
        {selectedItems.length ? selectedItems.join(', ') : 'Todas'}
      </button>
      <div className={`cst-select__list-container ${isOpen ? 'cst-select__list-container--visible' : ''}`}>
        <ul className="cst-select__list">
          {items.map((category) => (
            <li className="cst-select__item" key={category}>
              <input
                id={`category-${category}`}
                type="checkbox"
                className="cst-select__checkbox"
                onChange={onItemChange}
                value={category}
                checked={selectedItems.includes(category)}
              />
              <label htmlFor={`category-${category}`}>{category}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  items: PropTypes.arrayOf(String).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(String).isRequired,
};

export default CustomSelect;
