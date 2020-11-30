const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePartyInput(data) {
  let errors = {};
  
  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  const currTime = Date.now();

  if (!Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  if (!Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  if (!Validator.isDate(data.date) && data.date < currTime) {
    errors.date = 'Valid Date is required';
  }

  if (!Validator.isEmpty(data.host)) {
    errors.host = 'Host is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};