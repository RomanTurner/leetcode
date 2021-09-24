const { expect } = require('@jest/globals');
const { valid } = require('semver');
const validMountainArray = require('./valid_mountain');

test('should recognize a valid mountain ', () => {
  const a = [0, 3, 2, 1];
  expect(validMountainArray(a)).toBe(true);
});
test('should recognize an invalid mountain', () => {
  const a = [2, 1];
  const b = [3, 5, 5];
  expect(validMountainArray(a)).toBe(false);
  expect(validMountainArray(b)).toBe(false);
});

test('recognize decreasing array', () => {
  const a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  expect(validMountainArray(a)).toBe(false);
});

test('steep drop', () => {
  const a = [7, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  expect(validMountainArray(a)).toBe(true);
});