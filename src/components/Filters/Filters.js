import './Filters.scss';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelect from '../CustomSelect/CustomSelect';
import { availabilityOptions, categoriesOptions, orderOptions } from './FiltersData';
import { setAvailability, setOrder, setCategories } from '../../features/filtersSlice';

function Filters() {
  const dispatch = useDispatch();

  const selectedCategories = useSelector((state) => state.filters.categories);
  const selectedAvailability = useSelector((state) => state.filters.availability);
  const selectedOrder = useSelector((state) => state.filters.order);

  const onAvailabilityChange = (event) => {
    dispatch(setAvailability(event.target.value));
  };

  const onOrderChange = (event) => {
    dispatch(setOrder(event.target.value));
  };

  const onCategoriesChange = (newCategories) => {
    dispatch(setCategories(newCategories));
  };

  return (
    <div className="filters">
      <form className="filters__form">
        <CustomSelect
          items={categoriesOptions}
          selectedItems={selectedCategories}
          onSelectChange={onCategoriesChange}
        />

        <div className="filters__select-wrapper">
          <label htmlFor="state" className="filters__label">
            disponibilidad
            <select
              name="state"
              id="state"
              className="filters__select"
              onChange={onAvailabilityChange}
              defaultValue={selectedAvailability}
            >
              {availabilityOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="filters__select-wrapper">
          <label htmlFor="order" className="filters__label">
            orden
            <select
              name="order"
              id="order"
              className="filters__select"
              onChange={onOrderChange}
              defaultValue={selectedOrder}
            >
              {orderOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filters;
