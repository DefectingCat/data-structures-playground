class LinkedListNode<T> {
    constructor(
        public element: T,
        public next: LinkedListNode<T> | null = null
    ) {}
}

class LinkedList<T> {
    private head: LinkedListNode<T>;
    constructor(initHead: T) {
        this.head = new LinkedListNode(initHead);
    }

    find(element: T) {
        let currentNode = this.head;
        while (currentNode.element !== element) {
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
        target.next = new LinkedListNode(newValue);
    }

    remove(element: T) {
        const preNode = this.findPrevious(element);
        if (preNode.next?.next) {
            preNode.next = preNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
        console.log(currentNode.element);
    }
}

const myL = new LinkedList("head");
myL.insert("xfy", "head");
myL.insert("dfy", "xfy");
myL.display();

myL.remove("xfy");
myL.display();

export default LinkedList;
