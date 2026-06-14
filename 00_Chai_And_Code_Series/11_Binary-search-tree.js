// Binary Tree != BST

// Binary tree atmost 2 child node for every parent node. No order. Visit every node Time complexity - O(n) slow 

// Binary Search Tree (BST) is for searching. left subtree is always smaller than Root & right subtree is always greater than Root. Time complexity - O(log n) fast. Have to compare only one node at a time at each level. height is log n. 

// property of bST -> if we do In-order traversal, we will get increasing order of elements everytime

// Interview Question
//     - check if it is a valid BST or not.
//     - Print all elements of BST in increasing
//     - Inorder Traversal of BST

// ANSWER -> just do Inorder traversal of all, will get same answer

class Node {
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    } 

    insert(root,value){
        if(root == null){
            return new Node(value);
        }
        if(root.data == value) {
            return root;
        }
        if(root.data > value){
            root.left = insert(root.left,value)
        } else {
           root.right = insert(root.right,value)
        }
    }

}

function inOrder(root) {
    if (root != null) {
        inOrder(root.left)
        console.log(root.data + ' ');
        inOrder(root.right)
    }
}
