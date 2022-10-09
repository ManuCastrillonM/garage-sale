import './ShoppingCart.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import { removeElement } from '../../features/shoppingCartSlice';

function ShoppingCart({ isOpen, handleClose }) {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.elements);
  const dispatch = useDispatch();

  const whatsAppUrl = useMemo(() => {
    const url = `${process.env.REACT_APP_WHATSAPP_URL}?text=¡Hola! Me interesan estos productos que tienes a la venta:\n`;
    const items = shoppingCartItems.map((item) => item).join(', ');

    return `${encodeURI(url)}${encodeURIComponent(items)}`;
  }, [shoppingCartItems]);

  const shoppingCartContent = () => {
    if (shoppingCartItems.length === 0) {
      return (<p>No tienes elementos en tu carrito de compras</p>);
    }
    return (
      <>
        <div className="shopping-cart__content">
          <ul>
            {shoppingCartItems.map((item) => (
              <li className="shopping-cart__item" key={item}>
                {item}
                <button
                  className="shopping-cart__item-button"
                  type="button"
                  onClick={() => dispatch(removeElement(item))}
                  aria-label="eliminar elemento"
                >
                  &#10005;
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="shopping-cart__footer">
          <a
            href={whatsAppUrl}
            className="shopping-cart__button"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsappIcon} alt="logo de whatsapp" />
            Contacto
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={`shopping-cart__overlay ${isOpen ? 'shopping-cart__overlay--open' : ''}`}
        onClick={() => handleClose()}
        role="presentation"
      />

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
