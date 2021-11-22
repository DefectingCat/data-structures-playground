export class LinkedListNode<T> {
  constructor(
    public element: T,
    public next: LinkedListNode<T> | null = null
  ) {}
}

class RoundLinkedList<T> {
  private head: LinkedListNode<T>;
  constructor(initHead: T) {
    this.head = new LinkedListNode(initHead);
    this.head.next = this.head;
  }

  find(element: T) {
    let currentNode = this.head;
    while (currentNode.element !== element && currentNode.next !== this.head) {
      if (currentNode.next) currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPrevious(element: T) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * Insert a node after target
   * @param newValue new node's value
   * @param preNode target node
   */
  insert(newValue: T, preNode: T) {
    const target = this.find(preNode);
    target.next = new LinkedListNode(newValue, this.head);
  }

  remove(element: T) {
    const preNode = this.findPrevious(element);

    if (preNode.next?.next) {
      const target = this.find(element);
      // If head be deleted, use next node tobe head
      if (target === this.head) {
        target.next && (this.head = target.next);
      }
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next != this.head) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
    console.log(currentNode.element);
  }

  get length() {
    let currentNode = this.head;
    let i = 1;
    while (currentNode.next && currentNode.next != this.head) {
      i++;
      currentNode = currentNode.next;
    }
    return i;
  }
}

export default RoundLinkedList;
