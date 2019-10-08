'use strict';

function findHeight (BST) {
  //check every possible branch of the tree
  //increment a counter for every step down the tree
  //return the maximum number found
  //time complexity O(n)
  const distances = [];
  _leafDist(BST, 0, distances);
  return Math.max(...distances);
}

function _leafDist (t, count = 0, arr = []) {
  if (!t) {
    arr.push(count);
  }
  else {
    count++;
    _leafDist(t.left, count, arr);
    _leafDist(t.right, count, arr);
  }
}

function isBST (BST) {
  //has no more than 2 nodes - ASSUMED
  //left node < key
  //right node > key
  //for all possible nodes and subtrees
  //if at any point, left > key || right < key, return false
  //if ok for now, perform check on subtrees left and right of key
  //if never false, return true
  return checkNode(BST) === undefined;
  

}

function checkNode (node) {
  if (node.left) {
    if (node.left.key > node.key) {
      return false;
    }
    checkNode(node.left);
  }
  if (node.right) {
    if (node.right.key < node.key) {
      return false;
    }
    checkNode(node.right);
  }
}

module.exports = { findHeight, isBST };