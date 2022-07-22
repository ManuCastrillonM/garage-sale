import PropTypes from 'prop-types';
import './Card.scss';

function Card({
  name, imageUrl, category, description,
}) {
  const whatsAppUrl = `https://wa.me/573007004009?text=Hola!%20Me%20interesa%20un%20producto%20que%20tienes%20a%20la%20venta:%20${name}`;
  return (
    <div className="card">
      <img className="card__image" src={imageUrl} alt={name} />
      <div className="card__content">
        <span className="card__category">{category}</span>
        <span className="card__name">{name}</span>
        <span className="card__description">{description}</span>
        <a
          className="card__wa"
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Me interesa
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
