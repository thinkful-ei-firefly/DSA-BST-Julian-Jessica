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
  return _checkNode(BST) === undefined;
  

}

function _checkNode (node) {
  if (node.left) {
    if (node.left.key > node.key) {
      return false;
    }
    _checkNode(node.left);
  }
  if (node.right) {
    if (node.right.key < node.key) {
      return false;
    }
    _checkNode(node.right);
  }
}

function thirdLargest (tree) {
  //We have no guarantee of the structure of the tree, so we'll have to iterate recursively
  //Through the entire tree to perform a comparison.
  //We also need to track the three highest values in the tree at every step
  //Use an array? [key1, key2, key3]
  //Keep this array sorted so key1 < key2 <key3.
  //For every node, perform the comparisons:
  //if node.key > key1 && node.key < key2, key1 = node.key
  //else if node.key > key2 && node.key < key3, key1 = key2, key2 = node.key
  //else if node.key > key3, key1 = key2, key2 = key3, key3 = node.key
  //then, if node.left, run thirdLargest on node.left, passing down modified array
  //if node.right, run thirdLargest on node.right, passing down modified array
  //at end, return key1
  let top3arr = [tree.key, tree.key, tree.key];
  _checkValue(tree, top3arr);
  return top3arr[0];
}

function _checkValue (node, arr) {
  //check the value of the node and modify the value of the array appropriately
  if (node.key > arr[0] && node.key < arr[1]) {
    arr[0] = node.key;
  }
  else if (node.key > arr[1] && node.key < arr[2]) {
    arr[0] = arr[1];
    arr[1] = node.key;
  }
  else if (node.key > arr[2]) {
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = node.key;
  }
  //if there are further nodes to the left or right, perform the same
  // calculation on the lower branches
  if (node.left) {
    _checkValue(node.left, arr);
  }
  if (node.right) {
    _checkValue(node.right, arr);
  }
}

function _leafDist2 (t, count = 0, arr = []) {
  //increase count by 1 if node exists
  //if the node has no children, push count to arr
  //if the node has a left child, recursively call the left child
  //if the node has a right child, recursively call the right child
  if (t) count++;
  if (!t.left && !t.right) {
    arr.push(count);
  }
  if (t.left) {
    _leafDist2(t.left, count, arr);
  }
  if (t.right) {
    _leafDist2(t.right, count, arr);
  }
}

function balancedBST (tree) {
  const branchLengths = [];
  _leafDist2(tree, 0, branchLengths);
  const longest = Math.max(...branchLengths);
  const shortest = Math.min(...branchLengths);
  return (longest - shortest) <= 1;
}

function duplicateTrees (arr1, arr2) {
  //given 2 arrays, see if nodes would be formed the same if array elements
  //were inserted into a binary search tree in index order
  //for each node, take the value of the node and the 2 arrays of values that
  //would be added to it
  //find the first item lower than the node value in each array
  //find the first item higher than the node value in each array
  //first higher should be equal between arrays
  //first lower should be equal between arrays
  //if not, return false
  //if ok, filter remaining values into those that are larger or smaller than the start node
  //if elements still remin in filtered array, recursively call
  //with higher & lower values and arrays
  const firstVal = arr1[0];
  if (firstVal !== arr2[0]) {
    return false;
  }
  arr1 = arr1.filter(val => val !== firstVal);
  arr2 = arr2.filter(val => val !== firstVal);

  return _checkNodeBranching(firstVal, arr1, arr2) === undefined;
}

function _checkNodeBranching(key, arr1, arr2) {
  const firstlower1 = arr1.find(val => val < key);
  const firstlower2 = arr2.find(val => val < key);
  const firsthigher1 = arr1.find(val => val > key);
  const firsthigher2 = arr2.find(val => val > key);
  if (firstlower1 !== firstlower2 || firsthigher1 !== firsthigher2) {
    return false;
  }
  //filter arr1 and arr2 into values higher and lower than key, excluding higher and lower1/2
  const arr1lower = arr1.filter(val => val < key && val !== firstlower1);
  const arr2lower = arr2.filter(val => val < key && val !== firstlower2);
  const arr1higher = arr1.filter(val => val > key && val !== firsthigher1);
  const arr2higher = arr2.filter(val => val > key && val !== firsthigher2);

  if (arr1lower.length !== arr2lower.length || arr1higher.length !== arr2higher.length) {
    return false;
  }
  
  if (arr1lower.length > 0) {
    _checkNodeBranching(firstlower1, arr1lower, arr2lower);
  }

  if (arr1higher.length > 0) {
    _checkNodeBranching(firsthigher1, arr1higher, arr2higher);
  }

}

module.exports = { findHeight, isBST, thirdLargest, balancedBST, duplicateTrees };