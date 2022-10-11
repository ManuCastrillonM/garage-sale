import './CustomSelect.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function CustomSelect({ items, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cst-select">
      <span className="cst-select__label">categoria</span>
      <button type="button" className="cst-select__button" onClick={() => setIsOpen(!isOpen)}>elementos</button>
      <div className={`cst-select__list-container ${isOpen ? 'cst-select__list-container--visible' : ''}`}>
        <ul className="cst-select__list">
          {items.map((category) => (
            <li className="cst-select__item" key={category}>
              <input type="checkbox" className="cst-select__checkbox" onChange={onChange} />
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  items: PropTypes.arrayOf(String).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
