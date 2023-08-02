// Function to format date as MM/DD/YYYY
function format_date(date) {
    return date.toLocaleDateString();
  }
  
  // Function to generate the CSP header value
  //function generateCSP() {
    //const cspValue = "default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' https://trusted-cdn.com; img-src 'self' data: https://trusted-cdn.com; font-src 'self' https://trusted-cdn.com; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';";
    //return cspValue;
  //}
  
  // Export the functions
  module.exports = {
    format_date,
   // generateCSP,
  };
  