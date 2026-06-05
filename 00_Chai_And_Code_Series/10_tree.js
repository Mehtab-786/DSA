// # Tree Data Structure

// A tree is a **non-linear data structure**.

// - In linear data structures like arrays, linked lists, stacks, and queues, data is stored in a sequence (one after another).
// - In **non-linear data structures** like trees and graphs, data is connected in a hierarchical way.

// A tree stores data in the form of **nodes** connected with each other.


// ## Leaf Node
// The last nodes of a tree that do not have any children are called **leaf nodes**.


// ## Siblings
// Nodes that have the same parent are called **siblings**.


// ## Levels
// Trees are divided into different levels.


// In a tree, data is connected through nodes.
// To reach another node, we usually move using links between nodes.
// Trees support hierarchical movement, unlike arrays where elements are in a straight sequence.
// Also, in normal tree traversal, we **can backtrack** using recursion or stacks.


// # Types of Binary Trees

// # 1. Binary Tree
// A **binary tree** is a tree where each node can have:
// It cannot have more than 2 children.


// # 2. Binary Search Tree (BST)
// A **Binary Search Tree** follows a special rule:
// - Left subtree values are smaller
// - Right subtree values are larger

// # 3. Full Binary Tree (Strict Binary Tree)

// In a **full binary tree**, every node has either:
// - 0 children or // - exactly 2 children
// A node cannot have only 1 child.

// # 4. Complete Binary Tree
// A **complete binary tree** is filled:
// - Level by level
// - From left to right

// Before moving to the next level, the current level should be filled as much as possible.

// # 5. Right Skewed Tree
// In a **right skewed tree**, every node has only one child on the right side.

// # 6. Left Skewed Tree
// In a **left skewed tree**, every node has only one child on the left side.

// # 7. Degenerate Binary Tree
// A **degenerate tree** is a tree where every parent has only one child.
// It behaves almost like a linked list.
// It can be: left skewed - right skewed - or zig-zag

// # 8. Extended Binary Tree
// In an **extended binary tree**, we add special dummy nodes (NULL nodes) wherever a child is missing.// This helps in some advanced tree algorithms.

// Binary tree Representation -> Linked List or Array

// Drawbacks of Array Representation
// 1. Wastage of Memory
// If the tree is not complete, many array positions become empty.

// 2. Fixed Size
// Arrays usually have fixed size.
// If tree grows bigger  we may need a new larger array  copying data becomes costly

// 3. Insertion and Deletion are Difficult
// Adding or removing nodes is harder because indexes may change.

// 4. Not Good for Dynamic Trees
// If tree structure changes frequently, array representation becomes inefficient.

// --------------------------------------------

// Preorder Traversal -> Root -> Left -> Right
// Inorder Traversal -> Left -> Root -> Right
// Postorder Traversal -> Left -> Right -> Root


class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function preorder(root) {
    if (root != null) {
        console.log(root.data + ' ');
        preorder(root.left)
        preorder(root.right)
    }
}
function inOrder(root) {
    if (root != null) {
        inOrder(root.left)
        console.log(root.data + ' ');
        inOrder(root.right)
    }
}
function postOrder(root) {
    if (root != null) {
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.data + ' ');
    }
}

let root = new Node(1);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(8);


preorder(root)
inOrder(root)
postOrder(root)
