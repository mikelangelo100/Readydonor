const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateHospitalRegisterInput(data) {
  let errors = {};

  data.hospitalName = !isEmpty(data.hospitalName) ? data.hospitalName : '';
  data.hospitalNumber = !isEmpty(data.hospitalNumber) ? data.hospitalNumber : '';
  data.hospitalEmail = !isEmpty(data.hospitalEmail) ? data.hospitalEmail : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.hospitalName, { min: 2, max: 80 })) {
    errors.hospitalName = 'Hospital name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.hospitalName)) {
    errors.hospitalName = 'Hospital name field is required';
  }

  if (Validator.isEmpty(data.hospitalNumber)) {
    errors.hospitalNumber = 'Hospital Number field is required';
  }

  if (!Validator.isNumeric(data.hospitalNumber)) {
    errors.hospitalNumber = 'Hospital Number is invalid';
  }
  if (Validator.isEmpty(data.hospitalEmail)) {
    errors.hospitalEmail = 'Email field is required';
  }

  if (!Validator.isEmail(data.hospitalEmail)) {
    errors.hospitalEmail = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  } else {
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = 'Passwords must match';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
