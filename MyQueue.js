class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Queue {

    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value){
        const newValue = new Node(value);
        if (this.length === 0){
            this.first = this.last = newValue;
        }
        else{
            this.last.next = newValue;
            this.last = newValue;
        }
        this.length+=1;
        return this;
    }

    dequeue(){
        const rmvdValue = this.first.value;
        if(this.length === 0){
            return null
        }
        else if (this.length === 1){
            this.first = this.last = null;
        }
        else{
            this.first = this.first.next;
        }
        this.length-=1;
        return rmvdValue;
    }

    isEmpty(){
        return this.length===0;
    };
}

const myQueue = new Queue();


myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
  

console.log(myQueue.dequeue("Joy"));
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue("Matt"));
console.log(myQueue.dequeue("Pavel"));
console.log(myQueue.dequeue("Samir"));
console.log(myQueue.isEmpty());