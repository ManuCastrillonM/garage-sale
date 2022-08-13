import PropTypes from 'prop-types';
import './Card.scss';

function Card({
  name, category, coverImageIndex, description, images,
}) {
  const coverImage = images[coverImageIndex]?.fields?.file?.url || null;
  const whatsAppUrl = `${process.env.REACT_APP_WHATSAPP_URL}?text=Hola!%20Me%20interesa%20un%20producto%20que%20tienes%20a%20la%20venta:%20${name}`;
  return (
    <div className="card">
      {coverImage ? (
        <img className="card__image" src={coverImage} alt={name} />
      ) : (
        <div className="card__image card__image--empty">{name}</div>
      )}
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
  category: PropTypes.string.isRequired,
  coverImageIndex: PropTypes.number,
  description: PropTypes.string.isRequired,
  images: PropTypes.any.isRequired,
};

Card.defaultProps = {
  coverImageIndex: 0,
};

export default Card;
