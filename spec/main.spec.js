var fizzBuzz = require('../exercises/fizzbuzz/main');

describe('fizzBuzz', function() {
  it('Should return fizzbuzz string if divisible by 3 and by 5', function() {
    expect(fizzBuzz(15)).toString('fizzbuzz');
  });

  it('Should return fizz string if divisible by 3', function() {
    expect(fizzBuzz(9)).toString('fizz');
  });

  it('Should return buzz if divisible by 5', function() {
    expect(fizzBuzz(100000)).toString('buzz');
  });

  it('Should return Fail! string if is not divisible by 3 or by 5', function() {
    expect(fizzBuzz(0)).toString('Fail!');
  });

  it('Should return Fail! string if is not divisible by 3 or by 5', function() {
    expect(fizzBuzz(-0)).toString('Fail!');
  });

  it('Should return Fail! string if is not divisible by 3 or by 5', function() {
    expect(fizzBuzz(-3)).toString('Fail!');
  });
});
