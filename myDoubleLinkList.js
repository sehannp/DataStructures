class Node {
    constructor(value,next,previous){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DLinkedList {
    constructor(value) {
        this.head = new Node(value,null,null);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value,null,this.tail);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const headNode = this.head;
        this.head = new Node(value,headNode,null);
        headNode.previous = this.head;
        this.length++;
        return this;
    }

    insert(index,value){
        if (index === 0){
            this.prepend(value);
        }
        else if(index > this.length){
            this.append(value);
        }
        else{
            const currentNode = this.traverseToIndex(index-1);
            const nextNode = currentNode.next;
            currentNode.next = new Node(value,nextNode,currentNode);
            nextNode.previous = currentNode.next;
            this.length++;
        }
        return this;
    }

    remove(index){
        const currentNode = this.traverseToIndex(index-1);
        const nextNode = currentNode.next.next;
        currentNode.next = nextNode;
        nextNode.previous = currentNode;
        return this;
    }

    traverseToIndex(index){
        let currentNode = this.head;
        for(let i=0; i<index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

  }
  
const myLinkedList = new DLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.remove(2);

console.log(myLinkedList.printList());