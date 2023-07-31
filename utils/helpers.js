// validate.js to check for valid URLs and email addresses
const validator = require('validator');

function isValidEmail(email) {
  return validator.isEmail(email);
}

function isValidURL(url) {
  return validator.isURL(url);
}



module.exports = {
  isValidEmail,
  isValidURL,

};
