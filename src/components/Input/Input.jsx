import './Input.css';

const Input = ({
  type,
  placeholder,
  name,
  minLength = null,
  maxLength = null,
  autoComplete = null,
  readOnly = null,
  placeInput,
  inputValue,
  errorMessage,
  handleChange,
}) => (
  <label className={`${placeInput}__field`}>
    <div className={`${placeInput}__input-container ${errorMessage && `${placeInput}__input-container_type_error`}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${placeInput}__input ${errorMessage && `${placeInput}__input_type_error`}`}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete ?? `new-${name}`}
        readOnly={readOnly}
        required
        value={inputValue ?? ''}
        onChange={handleChange}
      />
    </div>
    <span className={`${placeInput}__input-error`}>
      {errorMessage}
    </span>
  </label>
);
export default Input;
