import { HashLink as Link } from 'react-router-hash-link';
import './Lead.css';
import mainBurger from '../../assets/images/main-burger.webp';

const Lead = ({
  label,
  pageTitle,
  pageSubtitle,
  buttonText,
  buttonAnchorLink,
}) => (
  <section className="lead">
    <div className="lead__info">
      <span className="lead__label">{label}</span>
      <h1 className="lead__title">{pageTitle}</h1>
      <p className="lead__paragraph">{pageSubtitle}</p>
      <button
        type="button"
        className="lead__btn button"
        id="main-action-button"
      >
        <Link className="lead__menu-link" smooth to={`home - page#${buttonAnchorLink}`}>
          {buttonText}
        </Link>
      </button>
    </div>
    <img
      alt="Бургер"
      className="lead__image"
      src={mainBurger}
    />
  </section>
);

export default Lead;
