# Tree Data Structure

## What is a Tree?

A **tree** is a **non-linear data structure**.

- In **linear data structures** like arrays, linked lists, stacks, and queues, data is stored in a sequence (one after another).
- In **non-linear data structures** like trees and graphs, data is connected in a hierarchical way.

A tree stores data in the form of **nodes** connected with each other.

---


## Parent and Child

- Upper node → **Parent**
- Lower node → **Child**

---

## Leaf Node

The last nodes of a tree that do not have any children are called **leaf nodes**.


---

## Siblings

Nodes that have the same parent are called **siblings**.

---

## Levels

Trees are divided into different levels.

Example:

```text
Level 1 → A
Level 2 → B, C
Level 3 → D, E
```

---

# Important Note About Traversal

In a tree, data is connected through nodes.

To reach another node, we usually move using links between nodes.
Trees support hierarchical movement, unlike arrays where elements are in a straight sequence.

Also, in normal tree traversal, we **can backtrack** using recursion or stacks.

---

# Types of Binary Trees

---

# 1. Binary Tree

A **binary tree** is a tree where each node can have:

- 0 child
- 1 child
- or maximum 2 children

It cannot have more than 2 children.

---

# 2. Binary Search Tree (BST)

A **Binary Search Tree** follows a special rule:

- Left subtree values are smaller
- Right subtree values are larger

Example:

```text
       10
      /  \
     5    20
```
---

# 3. Full Binary Tree (Strict Binary Tree)

In a **full binary tree**, every node has either:

- 0 children
  or
- exactly 2 children

A node cannot have only 1 child.

---

# 4. Complete Binary Tree

A **complete binary tree** is filled:

- Level by level
- From left to right

Before moving to the next level, the current level should be filled as much as possible.

Example:

```text
        A
      /   \
     B     C
    / \   /
   D   E F
```

This is complete because nodes are filled left to right.

---

# 5. Right Skewed Tree

In a **right skewed tree**, every node has only one child on the right side.

Example:

```text
A
 \
  B
   \
    C
     \
      D
```

---

# 6. Left Skewed Tree

In a **left skewed tree**, every node has only one child on the left side.

Example:

```text
      A
     /
    B
   /
  C
 /
D
```

---

# 7. Degenerate Binary Tree

A **degenerate tree** is a tree where every parent has only one child.

It behaves almost like a linked list.

It can be:

- left skewed
- right skewed
- or zig-zag

Example:

```text
A
 \
  B
 /
C
 \
  D
```

---

# 8. Extended Binary Tree

In an **extended binary tree**, we add special dummy nodes (NULL nodes) wherever a child is missing.

This helps in some advanced tree algorithms.

Example:

```text
      A
     / \
    B   NULL
```

Here `NULL` is a dummy node.

---

Binary tree Representation -> Linked List or Array


Drawbacks of Array Representation
1. Wastage of Memory

If the tree is not complete, many array positions become empty.

Example:

      A
     /
    B
   /
  C

Array:

[A, B, NULL, C, NULL, NULL, NULL]

Many empty spaces are wasted.

2. Fixed Size

Arrays usually have fixed size.

If tree grows bigger:

we may need a new larger array
copying data becomes costly

3. Insertion and Deletion are Difficult

Adding or removing nodes is harder because indexes may change.

4. Not Good for Dynamic Trees

If tree structure changes frequently, array representation becomes inefficient.

