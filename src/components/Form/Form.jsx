import './Form.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const Form = ({
  name, buttonState, onSubmit, children, placeForm, isValid, isOrderItem = true,
}) => (
  <form
    className={`form ${placeForm}__form`}
    name={name}
    onSubmit={onSubmit}
    noValidate
  >
    {children}
    <SubmitButton
      buttonState={buttonState}
      placeSubmitButton={placeForm}
      isValid={isValid}
      isOrderItem={isOrderItem}
    />
  </form>
);

export default Form;
