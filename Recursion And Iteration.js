// This is the Implement Search Functionality in BST
function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (sortedArray[mid] === key) {
            return mid;
        } else if (sortedArray[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return console.log("not found");
}
num = [1,2,3,4,5,6]
key = 8
console.log(binarySearch(num,key));


// This is a iteration
class Node
{
    constructor(value)
    {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
 
let root;
function preorderiterative(node)
{
    if (node == null)
    {
        return;
    }
    let bst = [];
    let curr = node;
    while (curr != null || bst.length > 0)
    {
        while (curr != null)
        {
            console.log(curr.value + " ");
            if (curr.right != null)
                bst.push(curr.right);
            curr = curr.left;
        }
        if (bst.length > 0)
        {
            curr = bst.pop();
        }
    }
}
function preorderIterative()
{
    preorderiterative(root);
}
root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.left.left = new Node(70);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.left.left.right = new Node(80);
  
preorderIterative();



// Recursive

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);
  
    if (val === arr[mid]) {
      return mid;
    }
  
    if (start >= end) {
      return -1;
    }
  
    return val < arr[mid]
      ? binarySearch(arr, val, start, mid - 1)
      : binarySearch(arr, val, mid + 1, end);
  }

  arr = [1,2,3,4,5,6,7]
  val = 4
  console.log(binarySearch(arr,val))
