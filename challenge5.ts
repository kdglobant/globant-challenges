class ListNode {
  //ListNode is global var lol
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }

  hasNext(): boolean {
    return this.next !== null;
  }
}

function arrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.hasNext()) {
    slow = slow!;
    fast = fast!.next!.hasNext() ? fast!.next!.next : fast!.next;
  }

  return slow;
}

const example1 = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(middleNode(example1));

const example2 = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
console.log(middleNode(example2));
