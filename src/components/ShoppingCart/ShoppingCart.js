import './ShoppingCart.scss';
import PropTypes from 'prop-types';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function ShoppingCart({ handleClose }) {
  const whatsAppUrl = `${process.env.REACT_APP_WHATSAPP_URL}?text=Hola!%20Me%20interesan%20estos%20productos%20que%20tienes%20a%20la%20venta:%20`;

  const onClose = () => {
    handleClose();
  };

  return (
    <>
      <div className="shopping-cart__overlay" onClick={onClose} role="presentation" />
      <div className="shopping-cart">
        <button type="button" className="shopping-cart__close" onClick={onClose} data-testid="close-shopping-cart-btn"><span className="hidden">close</span></button>
        <h1 className="shopping-cart__title">Productos que te interesan</h1>
        <ul>
          <li>
            <div className="shopping-cart__item">
              lampara de noche
            </div>
          </li>
          <li>
            <div className="shopping-cart__item">
              máquina de coser
            </div>
          </li>
          <li>
            <div className="shopping-cart__item">
              caja de herramientas
            </div>
          </li>
          <li>
            <div className="shopping-cart__item">
              bicicleta
            </div>
          </li>
        </ul>
        <a href={whatsAppUrl} className="shopping-cart__button" target="_blank" rel="noreferrer">
          <img src={whatsappIcon} alt="logo de whatsapp" />
          Contacto
        </a>
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ShoppingCart;
