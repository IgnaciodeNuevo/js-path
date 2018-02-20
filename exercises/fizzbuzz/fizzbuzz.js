var randomNumber = Math.round(Math.random() * 15);

console.log(randomNumber);

if (randomNumber % 3 === 0 && randomNumber % 5 === 0 && randomNumber != 0) {
  console.log('fizzbuzz');
} else if (randomNumber % 3 === 0 && randomNumber != 0) {
  console.log('fizz');
} else if (randomNumber % 5 === 0 && randomNumber != 0) {
  console.log('buzz');
} else {
  console.log('FAIL!');
}
