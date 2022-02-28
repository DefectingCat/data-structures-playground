class Node {
    constructor(
        public data: number,
        public left: Node | null,
        public right: Node | null
    ) {}

    show() {
        return this.data;
    }
}

class BST {
    public root: Node | null = null;

    /**
     * Insert data to binary tree.
     * @param data
     */
    insert(data: number) {
        const node = new Node(data, null, null);
        // If this node is root. just insert to root.
        if (this.root == null) {
            this.root = node;
        } else {
            // if had root
            let current = this.root;
            let parent;
            // eslint-disable-next-line no-constant-condition
            while (true) {
                parent = current;
                // if data less then current node data, insert to left
                if (data < current.data) {
                    if (current.left) {
                        current = current.left;
                    } else {
                        parent.left = node;
                        break;
                    }
                    // else insert to right
                } else {
                    if (current.right) {
                        current = current.right;
                    } else {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node: Node | null) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
}

export default BST;
