import './Filters.scss';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelect from '../CustomSelect/CustomSelect';

import { setAvailability, setOrder, setCategories } from '../../features/filtersSlice';

function Filters() {
  const dispatch = useDispatch();

  const selectedCategories = useSelector((state) => state.filters.categories);
  const selectedAvailability = useSelector((state) => state.filters.availability);
  const selectedOrder = useSelector((state) => state.filters.order);

  const availabilityOptions = [{
    value: 'all',
    label: 'Todos',
  },
  {
    value: 'available',
    label: 'Disponible',
  }, {
    value: 'sold',
    label: 'No disponible',
  }];

  const orderOptions = [{
    value: 'alphabetical-az',
    label: 'Alfabético (A-Z)',
  },
  {
    value: 'alphabetical-za',
    label: 'Alfabético (Z-A)',
  }, {
    value: 'price-low-high',
    label: 'Precio (menor a mayor)',
  }, {
    value: 'price-high-low',
    label: 'Precio (mayor a menor)',
  }];

  const categories = [
    'Baño',
    'Cocina',
    'Decoración',
    'Deporte',
    'Electrónico',
    'Habitación',
    'Jardinería',
    'Libros',
    'Mascotas',
    'Mueble',
    'Música',
    'Oficina',
    'Tecnología',
    'Hobbies',
    'Organización',
    'Todos',
  ];

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
          items={categories}
          selectedItems={selectedCategories}
          onChange={onCategoriesChange}
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
