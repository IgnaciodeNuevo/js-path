function fizzBuzz(number) {
  if (number === 0) {
    return 'Fail!';
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return 'Fail!';
  }
}

// This line allows to export on node module and acts as guard for the browser
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = fizzBuzz;
}
