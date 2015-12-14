// Load the file that exports the functionality to test
jest.dontMock('../app/validation');  // Don't create mock functions
var validate = require('../app/validation');

// Test to verify the checkWordCount function
describe('checkWordCount', function() {
  it('defines a word count check function', function() {
    expect(validate.checkWordCount).toBeDefined();
  });

  it('validates "in a land far far away"', function() {
    expect(validate.checkWordCount("in a land far far away")).toBe(true);
  });
});

// Test to verify the duplicateCheck function
describe('duplicateCheck', function() {
  it('defines a duplicate word checker function', function() {
    expect(validate.duplicateCheck).toBeDefined();
  });

  it('does not validate "in a land far far away"', function() {
    expect(validate.duplicateCheck("in a land far far away")).toBe(false);
  });
});

// Test to verify the verifyAlphaNumeric function
describe('verifyAlphaNumeric', function() {
  it('defines a function to validate input if text is only alphaNumeric characters', function() {
    expect(validate.verifyAlphaNumeric).toBeDefined();
  });

  it('returns "true" and does not validate "in a land far %#*"', function() {
    expect(validate.verifyAlphaNumeric("in a land far %#*")).toBe(true);
  });
});