const duplicateZeros = require('./duplicate_zeroes');

describe('Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.', () => {
  test('insert zeroes', () => {
    const a = [1, 0, 2, 3, 0, 4, 5, 0];
    expect(duplicateZeros(a)).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  test('not insert zeroes ', () => {
    const b = [1, 2, 3];
    expect(duplicateZeros(b)).toEqual([1, 2, 3]);
  });
});
