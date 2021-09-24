/**
 * In MATLAB, there is a handy function called reshape which
 * can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
 * You are given an m x n matrix mat and two integers
 * r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
 * The reshaped matrix should be filled with all the
 * elements of the original matrix in the same row-traversing order as they were.
 * If the reshape operation with given parameters is
 * possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 **/

var matrixReshape = function (mat, r, c) {
  let flatMat = mat.flat();
  if (r * c !== flatMat.length) return mat;

  let result = [];
  for (let i = 0; i < r; i++) {
    result.push(flatMat.splice(0, c));
  }

  return result;
};

const mat = [
  [1, 2],
  [3, 4],
];
const r = 2;
const c = 4;
console.log(0 / 1);
console.log(matrixReshape(mat, r, c));
