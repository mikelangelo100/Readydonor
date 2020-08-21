const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.age = !isEmpty(data.age) ? data.age : '';
 // data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : '';
  data.city = !isEmpty(data.city) ? data.city : '';
  data.bloodGroup = !isEmpty(data.bloodGroup) ? data.bloodGroup : '';
  data.contact = !isEmpty(data.contact) ? data.contact : '';


  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Profile name needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile name is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  }

if (Validator.isEmpty(data.age)) {
     errors.age = 'Age field is required';
   }
  //  if (!Validator.isEmpty(data.city)) {
  //   errors.city = "City field is required"
  // }
  if (Validator.isEmpty(data.bloodGroup)) {
    errors.bloodGroup = "Blood group field is required"
  }
  // if (!Validator.isEmpty(data.contact)) {
  //   errors.contact = "Contact field is required"
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
