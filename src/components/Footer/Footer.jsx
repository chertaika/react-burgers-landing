import { memo } from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.svg';

const Footer = memo(() => (
  <footer className="footer">
    <img className="footer__logo" src={logo} alt="Logo" />
    <p className="footer__copyright">Все права защищены</p>
  </footer>
));

export default Footer;
