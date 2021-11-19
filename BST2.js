console.log('hello world')



function MyTreeNode(value){
    this.left = null;
    this.right =null;
    this.value = value;
}

function BST(){
    this.root = null;
}
BST.prototype.insert = function(value){
    let newNode = new MyTreeNode(value);
    if( this.root ==null){
        this.root=newNode;
    }
    else{
        let currentNode = this.root;
        while(true){
            if(currentNode.value>newNode.value){
                if(currentNode.left == null){
                   currentNode.left = newNode;
                    break;
                }
                else{
                    currentNode = currentNode.left;
                }
            }
            else{
                    if(currentNode.right == null){
                       currentNode.right = newNode;
                        break;
                    }
                    else{
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }


let bst = new BST();
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(50);
bst.insert(60);
bst.insert(70);
bst.insert(80);
bst.insert(90);
bst.insert(100);

console.log(bst)