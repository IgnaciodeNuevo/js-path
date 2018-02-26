// Create a program that tells you if a number is pair or even
function isPair(number) {
  return number % 2 == 0;
}

// This line allows to export on node module and acts as guard for the browser
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = isPair;
}
