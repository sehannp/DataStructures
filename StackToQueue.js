const StackArray = require('./MyStack.js')

class StackToQueue{
    
    constructor(){
        this.queue = new StackArray();
    }

    push(value){
        return this.queue.push(value);
    }
    
    pop(){
        let newArray = [];
        while(!this.queue.isEmpty()){
            newArray.push(this.queue.pop());
        }

        for (let i = newArray.length-1; i>-1; i--){
            if (i !== newArray.length-1){
                this.push(newArray[i]);
            }
        }
        return newArray[newArray.length-1];
    }
}

const mySol = new StackToQueue();
console.log(mySol.push("I"));
console.log(mySol.push("am"));
console.log(mySol.push("learning"));
console.log(mySol.pop());
console.log(mySol.pop());
