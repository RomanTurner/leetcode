

const mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
     }
 }


class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    empty() { return !this.head }
    
    add(val) {
        const newNode = new Node(val);
        if (this.empty()) {
            this.head = newNode;
            this.tail = this.head;
            return this;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
        return this;
    }
}

const list = new List();
list.add('blarg');
console.log(list);
