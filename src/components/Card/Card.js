import PropTypes from 'prop-types';
import './Card.scss';

function Card({
  name, categories, coverImageIndex, description, images,
}) {
  const coverImage = (images && images[coverImageIndex].fields?.file?.url) || null;
  const whatsAppUrl = `${process.env.REACT_APP_WHATSAPP_URL}?text=Hola!%20Me%20interesa%20un%20producto%20que%20tienes%20a%20la%20venta:%20${name}`;
  return (
    <div className="card">
      {coverImage ? (
        <img className="card__image" src={coverImage} alt={name} />
      ) : (
        <div className="card__image card__image--empty">{name}</div>
      )}
      <div className="card__content">
        <span className="card__category">
          {categories.map((category, index) => ((index > 0) ? ', ' : '') + category)}
        </span>
        <span className="card__name">{name}</span>
        {
          description
          && <span className="card__description">{description}</span>
        }
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImageIndex: PropTypes.number,
  description: PropTypes.string,
  images: PropTypes.any,
};

Card.defaultProps = {
  coverImageIndex: 0,
  description: null,
  images: null,
};

export default Card;
