class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


// Implementation of stack on using LinkedList
class Stack {

  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
      if(this.length === 0){
        this.top = new Node(value);
        this.bottom = this.top;
      }
      else{
        let newNode = new Node(value);
        let topNode = this.top;
        this.top = newNode;
        this.top.next = topNode;
      }
      this.length++;
      return this;
  }
  pop(){
    if (this.length === 0) {
        return null;
    }
    let rmvNode = this.top;
    this.top = this.top.next;
    this.length--;

    //if this is not done, then on removal this.bottom will still point to the old node.
    if (this.length === 1 ){
        this.bottom = null;
    }

    return rmvNode;
  }

  isEmpty(){
    return this.length === 0;      
  }
}

// const myStack = new Stack();
// myStack.push("Discord");
// myStack.push("Udemy");
// myStack.push("google");
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.isEmpty());
//Discord
//Udemy
//google



// Implementation of stack on using Arrays
class StackArray {

    constructor(){
      this.stackArray = [];
    }

    peek() {
      return this.stackArray[this.stackArray.length-1] || null;
    }
    push(value){
        this.stackArray.push(value);
        return this;
    }
    pop(){
      if (this.stackArray.length === 0) {
          return null;
      }
      const rmvdValue = this.stackArray.pop();
      return rmvdValue;
    }
  
    isEmpty(){
      return (this.stackArray.length === 0);      
    }
  }

module.exports = StackArray;

// const myStack = new StackArray();
// myStack.push("Discord");
// myStack.push("Udemy");
// myStack.push("google");
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.isEmpty());