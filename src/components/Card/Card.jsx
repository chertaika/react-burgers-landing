import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import './Card.css';

const Card = ({
  card: {
    image, title, text, basePrice, grams,
  },
  currentCurrency: { currency, coefficient },
  onClickOrder,
}) => {
  const [currentPrice, setCurrentPrice] = useState('');

  const handleChooseBurger = () => {
    onClickOrder(title, currentPrice);
  };

  useEffect(() => {
    setCurrentPrice(`${+(basePrice * coefficient).toFixed(1)} ${currency}`);
  });

  return (
    <article className="products__item">
      <img className="products__item-image" src={image} alt="Бургер" />
      <h3 className="products__item-title">{title}</h3>
      <p className="products__item-desc">{text}</p>
      <div className="products__item-extra">
        <div className="products__item-info">
          <div className="products__item-price">{currentPrice}</div>
          <div className="products__item-weight">{`${grams} гр`}</div>
        </div>
        <Link className="product__item-action" smooth to="home-page#order" onClick={handleChooseBurger}>
          <button type="button" className="product__item-btn button">
            <span>Заказать</span>
            <span className="product__btn-icon" />
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
