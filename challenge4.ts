class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false;
    }

    let tortoise = head;
    let hare = head;

    while (hare && hare.next) {
        tortoise = tortoise.next!;
        hare = hare.next.next!;

        if (tortoise === hare) {
            return true;
        }
    }

    return false;
}


const example1 = new ListNode(3);
example1.next = new ListNode(2);
example1.next.next = new ListNode(0);
example1.next.next.next = new ListNode(-4);
example1.next.next.next.next = example1.next; 

console.log(hasCycle(example1)); 

const example2 = new ListNode(1);
example2.next = new ListNode(2);
example2.next.next = example2; 

console.log(hasCycle(example2)); 

const example3 = new ListNode(1);

console.log(hasCycle(example3));
