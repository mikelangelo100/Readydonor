const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateHospitalLoginInput(data) {
  let errors = {};

  data.hospitalNumber = !isEmpty(data.hospitalNumber) ? data.hospitalNumber : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isNumeric(data.hospitalNumber)) {
    errors.hospitalNumber = 'Hospital Number is invalid';
  }

  if (Validator.isEmpty(data.hospitalNumber)) {
    errors.hospitalNumber = 'Hospital Number field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
