import './Order.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import orderBurger from '../../assets/images/order-image.png';
import Form from '../Form/Form';
import Input from '../Input/Input';

const Order = ({
  buttonState,
  isOrderItem,
  handleSubmit,
  isValid,
  inputValues,
  errorMessages,
  handleChange,
}) => (
  <section className="order" id="order">
    <SectionTitle titleText="оформление заказа" />
    <div className="order__info">
      <img
        src={orderBurger}
        alt="Бургер в коробке"
        className="order__image"
      />
      <div className="order__container">
        <p className="order__desc">
          Заполните все данные и наш менеджер
          свяжется с вами для подтверждения заказа
        </p>
        <Form
          name="order"
          buttonState={buttonState}
          isOrderItem={isOrderItem}
          onSubmit={handleSubmit}
          placeForm="order"
          isValid={isValid}
        >
          <Input
            type="text"
            placeholder="Ваш заказ"
            name="order"
            placeInput="order"
            readOnly
            inputValue={inputValues.order}
            errorMessage={errorMessages.order}
            handleChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Ваше имя"
            name="name"
            minLength="2"
            maxLength="40"
            placeInput="order"
            inputValue={inputValues.name}
            errorMessage={errorMessages.name}
            handleChange={handleChange}
          />
          <Input
            type="tel"
            placeholder="Ваш телефон"
            name="phone"
            placeInput="order"
            inputValue={inputValues.phone}
            errorMessage={errorMessages.phone}
            handleChange={handleChange}
          />
        </Form>
      </div>
    </div>
  </section>
);

export default Order;
