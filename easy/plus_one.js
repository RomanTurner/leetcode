let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let digitsAsString = digits.join('');
digitsAsBigInts = BigInt(digitsAsString) + BigInt(1);
digitsAsString = digitsAsBigInts.toString();
return digitsAsString.split('').map((el) => +el);

function plusOne(digits) {
  let carry = 1;
  let len = digits.length - 1;
  while (len >= 0) {
    let num = digits[len];
    let sum = num + carry;
    if (sum > 10) {
      num = sum % 10;
    } else {
      num = sum;
      break;
    }
  }
}
