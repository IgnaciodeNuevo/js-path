var fizzBuzz = require('./example');

describe('fizzBuzz', function() {
  it('Should return fizzbuzz string if divisible by 3 and by 5', function() {
    expect(fizzBuzz(15)).toBe(true);
  });

  it('Should return fizz string if divisible by 3', function() {
    expect(fizz(9)).toBe(true);
  });

  it('Should return buzz if divisible by 5', function() {
    expect(fizz(100000)).toBe(true);
  });

  it('Should return Fail! string if is not divisible by 3 or by 5', function() {
    expect(fizz(0)).toBe(true);
  });

  it('Should return Fail! string if is not divisible by 3 or by 5', function() {
    expect(fizz(-0)).toBe(true);
  });

  it('Should return Fail! string if is not divisible by 3 or by 5', function() {
    expect(fizz(-3)).toBe(true);
  });
});
