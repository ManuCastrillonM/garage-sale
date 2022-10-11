import './Filters.scss';
import CustomSelect from '../CustomSelect/CustomSelect';

function Filters() {
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

  const onCategoriesChange = (event) => {
    // remove when implemented
    // eslint-disable-next-line
    console.log(event);
  };

  return (
    <div className="filters">
      <form className="filters__form">
        <CustomSelect items={categories} onChange={onCategoriesChange} />

        <div className="filters__select-wrapper">
          <label htmlFor="state" className="filters__label">
            estado
            <select name="state" id="state" className="filters__select">
              <option value="test">Disponible</option>
              <option value="test">No disponible</option>
              <option value="test">Todos</option>
            </select>
          </label>
        </div>

        <div className="filters__select-wrapper">
          <label htmlFor="order" className="filters__label">
            orden
            <select name="order" id="order" className="filters__select">
              <option value="test">Alfabético (A-Z)</option>
              <option value="test">Alfabético (Z-A)</option>
              <option value="test">Precio (menor a mayor)</option>
              <option value="test">Precio (mayor a menor)</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filters;
