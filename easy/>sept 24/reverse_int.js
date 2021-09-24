/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 *  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 *  then return 0.
 */

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let temp = 0;
  let res = 0;
  let y = Math.abs(x);

  while (y > 0) {
    temp = y % 10;
    res = res * 10 + temp;
    y = Math.floor(y / 10);
  }

  if (x < 0) {
    res = res * -1;
  }
  if (res > 2147483647 || res < -2147483647) {
    return 0;
  } else {
    return res;
  }

  //if it goes outside of JS interger range return 0
  //modulo %10 grabs the decimal
};

let x = 321;

console.log(reverse(-123));
console.log(reverse(-9992));
console.log(reverse(765));
console.log(
  reverse(
    1324123412341724597120345871212378568479260289365029783652876413287461239487562498562349875629348756239485623948562934875692384756294835629834
  )
);
