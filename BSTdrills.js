'use strict';
const BinarySearchTree = require('./BinaryTree');
const { findHeight, isBST, thirdLargest, balancedBST, duplicateTrees } = require ('./BSThelperFns');

function main () {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  
  console.log(balancedBST(BST));
}
// main();

function main2 () {
  const BST = new BinarySearchTree();
  BST.insert('E');
  BST.insert('A');
  BST.insert('S');
  BST.insert('Y');
  BST.insert('Q');
  BST.insert('U');
  BST.insert('E');
  BST.insert('S');
  BST.insert('T');
  BST.insert('I');
  BST.insert('O');
  BST.insert('N');
  console.log(balancedBST(BST));
}
// main2();

function tree (t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

//This function returns the sum of all values within the tree. It will have runtime O(n),
//since it will be called once on every node within the tree.

function main3 () {
  const BST = new BinarySearchTree();

  BST.insert(4);
  BST.insert(2);
  BST.insert(6);
  BST.insert(1);
  BST.insert(3);
  BST.insert(5);
  BST.insert(7);

  console.log(balancedBST(BST));
}
// main3();

function main4 () {
  const arr1 = [3, 5, 4, 6, 1, 0, 2];
  const arr2 = [3, 1, 5, 2, 4, 6, 0];

  const arr3 = [3, 4, 5, 6, 1, 0, 2];
  const arr4 = [3, 1, 5, 2, 4, 6, 0];

  const arr5 = [3, 4, 5, 6, 2];
  const arr6 = [3, 1, 5, 2, 4, 6, 0];

  const arr7 = [352, 4, 42, 6, 1, 3, 2];
  const arr8 = [3, 1, 89, 587, 7, 4, 0];

  const arr9 = [3, 5, 4, 6, 1, 0, 2];
  const arr0 = [3, 5, 4, 6, 1, 0, 2];

  console.log(duplicateTrees(arr1, arr2));
  console.log(duplicateTrees(arr3, arr4));
  console.log(duplicateTrees(arr5, arr6));
  console.log(duplicateTrees(arr7, arr8));
  console.log(duplicateTrees(arr9, arr0));
}
main4();