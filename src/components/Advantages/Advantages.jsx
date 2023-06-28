import { memo } from 'react';
import './Advantages.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import burger from '../../assets/images/burger.png';
import meat from '../../assets/images/meat.png';
import foodTruck from '../../assets/images/food-truck.png';

const Advantages = memo(() => (
  <section className="advantages" id="advantages">
    <SectionTitle titleText="почему нас выбирают?" />
    <div className="advantages__items">
      <div className="advantages__item">
        <img
          src={burger}
          alt="Бургер"
          className="advantages__item-icon"
        />
        <h3 className="advantages__item-title">Авторские рецепты</h3>
        <p className="advantages__item-paragraph">
          Наши бургеры обладают уникальным
          сочетанием вкусов и не похожи ни на какие другие.
          Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для
          нашего меню.
        </p>
      </div>
      <div className="advantages__item">
        <img
          src={meat}
          alt="Мясо"
          className="advantages__item-icon"
        />
        <h3 className="advantages__item-title">Мраморная говядина</h3>
        <p className="advantages__item-paragraph">
          Для наших бургеров мы используем
          отборную 100% мраморную говядину, которую закупаем
          исключительно у фермеров. Мы уверены в качестве нашего мяса.
        </p>
      </div>
      <div className="advantages__item">
        <img
          src={foodTruck}
          alt="Грузовик с едой"
          className="advantages__item-icon"
        />
        <h3 className="advantages__item-title">Быстрая доставка</h3>
        <p className="advantages__item-paragraph">
          Мы доставляем в пределах МКАД за 30
          минут, а если не успеем — доставка бесплатно.
          Мы тщательно упаковываем наши бургеры, чтобы по дороге они не
          остыли.
        </p>
      </div>
    </div>
  </section>
));

export default Advantages;
