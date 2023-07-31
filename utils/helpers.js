<<<<<<< HEAD
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
=======
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
  };
  
>>>>>>> a936622d05d770e6e0303e0b694e86e60fdce1ce
