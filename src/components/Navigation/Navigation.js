import './Navigation.scss';
import { useState, useEffect } from 'react';

function Navigation() {
  const [offset, setOffset] = useState();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navigation ${offset > 61 ? 'navigation--fixed' : ''}`}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <a to="/">Home</a>
        </li>
        <li className="navigation__item">
          <a to="/about">About</a>
        </li>
        <li className="navigation__item">
          <a to="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
