import './ProductList.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';

const ProductList = ({ cards, currentCurrency, chooseBurger }) => (
  <section className="products" id="products">
    <SectionTitle titleText="выберите свой бургер" />
    <div className="products__items">
      {cards.map(card => (
        <Card
          card={card}
          currentCurrency={currentCurrency}
          onClickOrder={chooseBurger}
        />
      ))}
    </div>
  </section>
);

export default ProductList;
