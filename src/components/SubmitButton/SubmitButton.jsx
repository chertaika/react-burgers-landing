import './SubmitButton.css';

const SubmitButton = ({
  buttonState: { buttonText, block },
  placeSubmitButton,
  isValid,
  isOrderItem,
}) => (
  <button
    className={`${placeSubmitButton}__submit-btn button`}
    disabled={!!((!isValid || block || !isOrderItem))}
    type="submit"
  >
    {buttonText}
  </button>

);

export default SubmitButton;
