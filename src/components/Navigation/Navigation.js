import './Navigation.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import cartImage from '../../assets/icons/shopping-cart.svg';

function Navigation() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const shoppingCartCount = useSelector((state) => state.shoppingCart.elements.length);

  return (
    <>
      <ShoppingCart handleClose={() => setShowShoppingCart(false)} isOpen={showShoppingCart} />
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <button type="button" className="nav__cart" onClick={() => setShowShoppingCart(true)} data-testid="nav-cart-cta">
              <img className="nav__cart-img" src={cartImage} alt="carro de compras" />
              <span className="nav__cart-count">{shoppingCartCount}</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
