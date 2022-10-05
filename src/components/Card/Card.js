import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../features/featuredProductSlice';
import './Card.scss';

function Card({ data }) {
  const dispatch = useDispatch();

  const coverImage = (data.images && data.images[0].fields?.file?.url) || null;
  return (
    <div className="card">
      {coverImage ? (
        <img className="card__image" src={coverImage} alt={data.name} />
      ) : (
        <div className="card__image card__image--empty">{data.name}</div>
      )}
      <div className="card__content">
        <span className="card__category">
          {data.categories.map((category, index) => ((index > 0) ? ', ' : '') + category)}
        </span>
        <span className="card__name">{data.name}</span>
        {
          data.description
          && <span className="card__description">{data.description}</span>
        }
        <button
          className="card__wa"
          type="button"
          onClick={() => { dispatch(setProduct(data)); }}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.any,
};

Card.defaultProps = {
  data: {},
};

export default Card;
