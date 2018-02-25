(function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, ': fizzbuzz');
    } else if (i % 3 === 0) {
      console.log(i, ': fizz');
    } else if (i % 5 === 0) {
      console.log(i, ': buzz');
    } else {
      console.log(i);
    }
  }
})();
