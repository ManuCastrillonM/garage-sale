import './ShoppingCart.scss';
import PropTypes from 'prop-types';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function ShoppingCart({ isOpen, handleClose }) {
  const whatsAppUrl = `${process.env.REACT_APP_WHATSAPP_URL}?text=Hola!%20Me%20interesan%20estos%20productos%20que%20tienes%20a%20la%20venta:%20`;

  const shoppingItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const shoppingCartContent = () => {
    if (shoppingItems.length === 0) {
      return (<p>No tienes elementos en tu carrito de compras</p>);
    }
    return (
      <>
        <div className="shopping-cart__content">
          <ul>
            {shoppingItems.map((item) => (
              <li className="shopping-cart__item" key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="shopping-cart__footer">
          <a href={whatsAppUrl} className="shopping-cart__button" target="_blank" rel="noreferrer">
            <img src={whatsappIcon} alt="logo de whatsapp" />
            Contacto
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={`shopping-cart__overlay ${isOpen ? 'shopping-cart__overlay--open' : ''}`} onClick={() => handleClose()} role="presentation" />

      <div className={`shopping-cart ${isOpen ? 'shopping-cart--open' : ''}`}>
        <div className="shopping-cart__header">
          <button
            type="button"
            className="shopping-cart__close"
            onClick={() => handleClose()}
            data-testid="close-shopping-cart-btn"
          >
            &#10005;
          </button>
          <h1 className="shopping-cart__title">Productos que te interesan</h1>
        </div>

        {shoppingCartContent()}
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ShoppingCart;
