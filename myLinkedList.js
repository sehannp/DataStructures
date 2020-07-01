class Node {
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
    toString(){
        return ("value : "+this.value);
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value,null);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value,null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const headNode = this.head;
        this.head = new Node(value,headNode);
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
            currentNode.next = new Node(value,nextNode);
            this.length++;
        }
        return this;
    }

    remove(index){
        const currentNode = this.traverseToIndex(index-1);
        const nextNode = currentNode.next.next;
        currentNode.next = nextNode;
        return this;
    }

    reverse(){
        if(this.length === 0){
            return null;
        }
        else if (this.length === 1){
            return this;
        }
        else{
            let thisArray = this.printList();

            this.head = new Node(thisArray[thisArray.length-1],null);
            this.tail = this.head;
            this.length = 1;

            for(let i=thisArray.length-2; i>=0; i--){
                this.append(thisArray[i]);
            }
            return this;
        }
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
  
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.remove(2);
// myLinkedList.reverse();

console.log(myLinkedList.printList());