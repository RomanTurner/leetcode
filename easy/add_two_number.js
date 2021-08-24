/* 
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero,
except the number 0 itself.
*/
let carry = 0;

let addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2 && carry === 0) {
    return null;
  }

  let x = l1 ? l1.val : 0;
  let y = l2 ? l2.val : 0;
  let nextL1 = l1 ? l1.next : null;
  let nextL2 = l2 ? l2.next : null;

  let sum = x + y + carry;

  carry = Math.floor(sum / 10);
  sum = sum % 10;

  return {
    val: sum,
    next: addTwoNumbers(nextL1, nextL2),
  };
};

