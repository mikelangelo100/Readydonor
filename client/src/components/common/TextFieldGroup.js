import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-row">
      <div className="form-group col-md-6">
      <input
        type={type}
        className={classnames('form-control form__input', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-info">{info}</small>}
      {error && <div >{error}</div>}
    </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
