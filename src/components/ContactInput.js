import React from "react";
import PropTypes from "prop-types";

const ContactInput = ({
  inputId,
  placeholder,
  inputType,
  handleChange,
  value
}) => {
  let input = {};
  if (inputType == "text") {
    input = (
      <input
        type="text"
        className="form__input"
        name={inputId}
        placeholder={placeholder}
        id={inputId}
        onChange={handleChange}
        required="required"
        value={value}
      />
    );
  } else if (inputType == "textarea") {
    input = (
      <textarea
        className="form__input form__input--textarea"
        name={inputId}
        placeholder={placeholder}
        id={inputId}
        onChange={handleChange}
        required="required"
        value={value}
      />
    );
  }

  return (
    <div className="form__group">
      {input}
      <label htmlFor={inputId} className="form__label">
        {placeholder}
      </label>
    </div>
  );
};

ContactInput.propTypes = {
  /** input id & name */
  inputId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(["text", "textarea"]),
  /** input content*/
  value: PropTypes.string,
  /** called on input change */
  handleChange: PropTypes.func.isRequired
};

ContactInput.defaultProps = {
  inputType: "text"
};

export default ContactInput;
