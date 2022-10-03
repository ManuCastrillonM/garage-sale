import './ShoppingCart.scss';
import PropTypes from 'prop-types';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function ShoppingCart({ handleClose }) {
  const whatsAppUrl = `${process.env.REACT_APP_WHATSAPP_URL}?text=Hola!%20Me%20interesan%20estos%20productos%20que%20tienes%20a%20la%20venta:%20`;

  const shoppingItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <>
      <div className="shopping-cart__overlay" onClick={() => handleClose()} role="presentation" />
      <div className="shopping-cart">
        <div className="shopping-cart__header">
          <button
            type="button"
            className="shopping-cart__close"
            onClick={() => handleClose()}
            data-testid="close-shopping-cart-btn"
          >
            <span className="hidden">close</span>
          </button>
          <h1 className="shopping-cart__title">Productos que te interesan</h1>
        </div>

        {shoppingItems.length > 0 ? (
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
        ) : <p>No tienes elementos en tu carrito de compras</p>}

      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ShoppingCart;
