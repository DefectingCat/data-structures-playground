import BST from ".";

const nums = new BST();

nums.insert(2);
nums.insert(45);
nums.insert(13);

nums.inOrder(nums.root);
