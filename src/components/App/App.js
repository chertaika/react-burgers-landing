import { useCallback, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import api from '../../utils/Api';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState({ currency: '$', coefficient: 1 });
  const [buttonOrder, setButtonOrder] = useState({ buttonText: 'Оформить заказ', block: false });

  const changeCurrency = () => {
    if (currentCurrency.currency === '$') {
      return setCurrentCurrency({ currency: '₽', coefficient: 83 });
    } if (currentCurrency.currency === '₽') {
      return setCurrentCurrency({ currency: 'BYN', coefficient: 3 });
    } if (currentCurrency.currency === 'BYN') {
      return setCurrentCurrency({ currency: '€', coefficient: 0.9 });
    } if (currentCurrency.currency === '€') {
      return setCurrentCurrency({ currency: '¥', coefficient: 6.9 });
    }
    return setCurrentCurrency({ currency: '$', coefficient: 1 });
  };

  const handleSendOrder = useCallback(async (data) => {
    try {
      setButtonOrder({ buttonText: 'Оформляем...', block: true });
      await api.sendOrder(data);
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonOrder({ buttonText: 'Оформить заказ', block: false });
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const initialCards = await api.getBurgers();
        setCards(initialCards);
      } catch (error) {
        console.log(`Ошибка: ${error}`);
      }
    })();
  }, []);

  return (
    <>
      <Header currentCurrency={currentCurrency} onChange={changeCurrency} />

      <Main
        cards={cards}
        currentCurrency={currentCurrency}
        onSendOrder={handleSendOrder}
        buttonState={buttonOrder}
      />

      <Footer />
    </>
  );
};
export default App;
