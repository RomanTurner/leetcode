/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  let size = 0;
  let temp = head;

  while (temp !== null) {
    temp = temp.next;
    size++;
  }

  console.log(size);
  const isEven = (num) => num % 2 === 0;
  if (isEven(size)) {
    let count = size / 2 + 1;
    temp = head;
    while (count > 1) {
      temp = temp.next;
      count--;
    }
    return temp;
  } else {
    let count = Math.ceil(size / 2);
    temp = head;
    while (count > 1) {
      temp = temp.next;
      count--;
    }
    return temp;
  }
};


var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};