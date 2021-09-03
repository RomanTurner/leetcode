/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return head;
  if (head.length === 1) return head;
  let left = head;
  let right = head.next;
  while (right != null) {
    if (right.val === left.val) {
      right = right.next;
      left.next = right;
    } else {
      left = left.next;
      right = right.next;
    }
  }
  return head;
};
