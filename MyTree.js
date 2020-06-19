/* 
  Author: Sehan
  Description: This is a model implementation of Binary tree for JS
*/

// A object for each node of the tree
class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
}
  
class BinarySearchTree {

  constructor(){
    this.root = null;
  }

  insert(value){
    if (this.root === null){
      this.root = new Node(value);
    }
    else {
        //reference to the current node. This is not necessarily the root. At start it is the root.
        let currentNode = this.root;
        while(true){
          if (value < currentNode.value){
            //left
            if (!currentNode.left){
              currentNode.left = new Node(value);
              return this;
            }
            //there is a value already. So you are moving the reference to the next level down.
            currentNode = currentNode.left;
          }
          else {
            //right
            if (!currentNode.right){
              currentNode.right = new Node(value);
              return this;
            }
            currentNode = currentNode.right;
          }
        }
    }
  }
  lookup(value){
      if(!this.root){
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value === currentNode.value){
          return currentNode;
        }
        else if(value < currentNode.value){
          currentNode = currentNode.left;
        }
        else if((value > currentNode.value)){
          currentNode = currentNode.right;
        }
      }
      return null;
  }
  
  remove(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      else if (value  > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      else if (currentNode.value === value){

        //if no right child
        if(currentNode.right === null){
          // for cases when root is the one to be removed
          if(parentNode === null){
            this.root = currentNode.left;
          }
          //decides where to attach the child after node is removed.
          else{
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.left;
            }
            else if (currentNode.value > parentNode.value){
              //what is there is something on parent's right. Wouldnt it get replaced ?
              parentNode.right = currentNode.left;
            }
          }
        }
        //right child doesnt have a left child
        else if(currentNode.right.left === null){
          if(parentNode === null){
            this.root = currentNode.left;
          }
          else{
            currentNode.right.left = currentNode.left;
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.right;
            }
            else if (currentNode.value > parentNode.value){
              //what is there is something on parent's right. Wouldnt it get replaced ?
              parentNode.right = currentNode.right;
            }  
          }
        }
        //right child has a left child
        else {
          // find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null){
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null){
            this.root = leftmost;
          }
          else {
            if(currentNode.value < parentNode.value){
              parentNode.left = leftmost;
            }
            else if (currentNode.value > parentNode.value){
              //what is there is something on parent's right. Wouldnt it get replaced ?
              parentNode.right = leftmost;
            } 
          }
        }
        return true;
      }
    }
  }
}
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(JSON.stringify(traverse(tree.root)));
  
  console.log(tree.lookup(20));
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    // console.log(node);
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  