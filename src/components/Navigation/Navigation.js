import './Navigation.scss';
import { useState } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import cartImage from '../../assets/icons/shopping-cart.svg';

function Navigation() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  return (
    <>
      <ShoppingCart handleClose={() => setShowShoppingCart(false)} isOpen={showShoppingCart} />
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <button type="button" className="nav__cart" onClick={() => setShowShoppingCart(true)} data-testid="nav-cart-cta">
              <img className="nav__cart-img" src={cartImage} alt="carro de compras" />
              <span className="nav__cart-num">0</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
