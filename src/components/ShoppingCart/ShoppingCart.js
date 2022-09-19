import './ShoppingCart.scss';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function ShoppingCart() {
  return (
    <>
      <div className="shopping-cart__overlay" />
      <div className="shopping-cart">
        <button type="button" className="shopping-cart__close"><span className="hidden">close</span></button>
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
        <button type="button" className="shopping-cart__button">
          <img src={whatsappIcon} alt="logo de whatsapp" />
          Contacto
        </button>
      </div>
    </>
  );
}

export default ShoppingCart;
