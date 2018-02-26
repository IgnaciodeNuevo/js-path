var isPair = require('../example');

describe('isPair', function() {
  it('Should return true for a pair number', function() {
    expect(isPair(2)).toBe(true);
  });

  it('Should return false for an even number', function() {
    expect(isPair(1)).toBe(false);
  });
});
