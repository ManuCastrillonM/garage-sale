import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { clearProduct } from '../../features/featuredProductSlice';
import { addElement, removeElement } from '../../features/shoppingCartSlice';
import ImageGallery from '../ImageGallery/ImageGallery';
import './ProductModal.scss';

function ProductModal({
  name,
  categories,
  description,
  images,
  price,
  productUrl,
  status,
}) {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.elements);
  const dispatch = useDispatch();

  const imageUrls = [];
  if (images) {
    images.forEach((image) => {
      if (image.fields?.file?.url) {
        imageUrls.push(image.fields.file.url);
      }
    });
  }

  const displayPrice = price > 0 ? `$${price.toLocaleString()} COP` : null;

  const closeModal = () => {
    dispatch(clearProduct());
  };

  const addToCart = () => {
    dispatch(addElement(name));
    closeModal();
  };

  const removeFromCart = () => {
    dispatch(removeElement(name));
    closeModal();
  };

  const statusLabel = (currentStatus) => {
    if (currentStatus === 'available') {
      return (
        <span>Disponible para entrega inmediata</span>
      );
    } if (currentStatus === 'unavailable') {
      return (
        <span>Disponible para entrega a partir de 10/11/2022</span>
      );
    }

    return (
      <span className="modal__availability--unavailable">No disponible</span>
    );
  };

  const cta = shoppingCartItems.indexOf(name) === -1 ? {
    action: addToCart,
    label: 'Agregar al carrito',
  } : {
    action: removeFromCart,
    label: 'Remover del carrito',
  };

  return (
    <>
      <section className="modal" data-testid="product-modal">
        {
          imageUrls.length > 0
          && <ImageGallery images={imageUrls} name={name} />
        }
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
          <div className="modal__availability">{statusLabel(status)}</div>
          {
            productUrl
            && <a className="modal__product-url" href={productUrl} target="blank" rel="noopener noreferrer">Ver producto original</a>
          }
          {status !== 'sold' && (
            <div className="modal__ctas">
              <button type="button" className="modal__cart" onClick={cta.action}>{cta.label}</button>
            </div>
          )}
        </div>
        <button type="button" className="modal__close" onClick={closeModal}>&#10006;</button>
      </section>
      <div className="modal__overlay" onClick={closeModal} aria-hidden="true" />
    </>
  );
}
ProductModal.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  images: PropTypes.any,
  price: PropTypes.number,
  productUrl: PropTypes.string,
  status: PropTypes.string,
};

ProductModal.defaultProps = {
  description: null,
  images: null,
  price: 0,
  productUrl: null,
  status: null,
};

export default ProductModal;
