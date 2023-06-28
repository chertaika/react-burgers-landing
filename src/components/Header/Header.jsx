import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';

const Header = ({ currentCurrency: { currency }, onChange }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className={`header ${isMenuOpened && 'header_menu-opened'}`}>
      <img className="header__logo" src={logo} alt="Logo" />
      <nav className="header__menu">
        <ul className="header__menu-options">
          <li className="header__menu-option">
            <Link className="header__menu-link" smooth to="home-page#advantages">
              Почему у нас
            </Link>
          </li>
          <li className="header__menu-option">
            <Link className="header__menu-link" smooth to="home-page#products">
              Меню бургеров
            </Link>
          </li>
          <li className="header__menu-option">
            <Link className="header__menu-link" smooth to="home-page#order">
              Оформление заказа
            </Link>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="header__currency-btn"
        id="change-currency"
        title="Изменить валюту"
        onClick={onChange}
      >
        {currency}
      </button>
      <button
        type="button"
        className="header__burger btn-hover"
        onClick={handleOpenMenu}
      >
        <span
          className={`header__burger-line ${isMenuOpened && 'header__burger-line_active'}`}
        />
      </button>
    </header>
  );
};

export default Header;
