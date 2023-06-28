import { useCallback, useState } from 'react';
import './Main.css';
import useFormValidator from '../../hooks/useFormValidator';
import Lead from '../Lead/Lead';
import ProductList from '../ProductList/ProductList';
import Order from '../Order/Order';
import Advantages from '../Advantages/Advantages';

const Main = ({
  cards,
  currentCurrency,
  onSendOrder,
  buttonState,
}) => {
  const [isOrderItem, setIsOrderItem] = useState(false);

  const {
    inputValues,
    isValid,
    errorMessages,
    handleChange,
    resetForm,
    setInputValues,
  } = useFormValidator();

  const chooseBurger = (title, price) => {
    setInputValues({ ...inputValues, order: `${title} (${price})` });
    setIsOrderItem(true);
  };

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    onSendOrder(inputValues);
    setIsOrderItem(false);
    resetForm();
  }, [inputValues]);

  return (
    <main className="content">
      <Lead
        label="Новое меню"
        pageTitle="бургер чеддер"
        pageSubtitle="Мы обновили наше меню, спешите попробовать сезонные новинки и
            насладиться отличным вкусом наших бургеров.
            Готовим для вас лучшие бургеры в городе из отборной мраморной
            говядины."
        buttonText="Смотреть меню"
        buttonAnchorLink="products"
      />

      <Advantages />

      <ProductList
        cards={cards}
        currentCurrency={currentCurrency}
        chooseBurger={chooseBurger}
      />

      <Order
        buttonState={buttonState}
        isOrderItem={isOrderItem}
        handleSubmit={handleSubmit}
        isValid={isValid}
        inputValues={inputValues}
        errorMessages={errorMessages}
        handleChange={handleChange}
      />

    </main>
  );
};

export default Main;
