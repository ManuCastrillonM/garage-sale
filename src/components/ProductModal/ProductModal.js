import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { clearProduct } from '../../features/featuredProductSlice';
import { addElement, removeElement } from '../../features/shoppingCartSlice';
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
}) {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.elements);
  const dispatch = useDispatch();

  const coverImage = (images && images[coverImageIndex].fields?.file?.url) || null;
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
        {coverImage && (
          <div className="modal__image-wrapper">
            <img className="modal__image" src={coverImage} alt={name} />
          </div>
        )}
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
              status === 'available' ? 'Disponible desde ya' : 'Disponible desde el 30 de Octubre de 2022'
            }
          </p>
          {
            productUrl
            && <a className="modal__product-url" href={productUrl}>Ver producto original</a>
          }

          <div className="modal__ctas">
            <button type="button" className="modal__cart" onClick={cta.action}>{cta.label}</button>
          </div>
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
  coverImageIndex: PropTypes.number,
  description: PropTypes.string,
  images: PropTypes.any,
  price: PropTypes.number,
  productUrl: PropTypes.string,
  status: PropTypes.string,
};

ProductModal.defaultProps = {
  coverImageIndex: 0,
  description: null,
  images: null,
  price: 0,
  productUrl: null,
  status: null,
};

export default ProductModal;
