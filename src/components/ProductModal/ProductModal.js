import { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductModal.scss';

function ProductModal({
  name,
  categories,
  coverImageIndex,
  description,
  images,
  price,
  productUrl,
  status,
  availabilityDate,
}) {
  const coverImage = (images && images[coverImageIndex].fields?.file?.url) || null;
  const displayPrice = price > 0 ? `$${price.toLocaleString()} COP` : null;

  const [displayModal, setDisplayModal] = useState(false);

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <section className={`modal ${displayModal ? 'active' : ''}`}>
        <div className="modal__image-wrapper">
          <img className="modal__image" src={coverImage} alt={name} />
        </div>
        <div className="modal__content">
          <p className="modal__category">
            {categories.map((category, index) => ((index > 0) ? ', ' : '') + category)}
          </p>
          <p className="modal__name">{name}</p>
          {
            displayPrice
            && <p className="modal__price">{displayPrice}</p>
          }
          {
            description
            && <p className="modal__description">{description}</p>
          }
          <p className="modal__availability">
            {
              status === 'available' ? 'Disponible desde ya' : `Disponible desde el ${availabilityDate.substring(0, availabilityDate.indexOf('T'))}`
            }
          </p>
          {
            productUrl
            && <a className="modal__product-url" href={productUrl}>Ver producto original</a>
          }

          <div className="modal__ctas">
            <button type="button" className="modal__cart">Agregar al carrito</button>
          </div>
        </div>
        <button type="button" className="modal__close" onClick={closeModal}>&#10006;</button>
      </section>
      <div className={`modal__overlay ${displayModal ? 'active' : ''}`} onClick={closeModal} aria-hidden="true" />
    </>
  );
}
ProductModal.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImageIndex: PropTypes.number,
  description: PropTypes.string,
  images: PropTypes.any,
  price: PropTypes.number,
  productUrl: PropTypes.string,
  status: PropTypes.string,
  availabilityDate: PropTypes.any,
};

ProductModal.defaultProps = {
  coverImageIndex: 0,
  description: null,
  images: null,
  price: 0,
  productUrl: null,
  status: null,
  availabilityDate: null,
};

export default ProductModal;
