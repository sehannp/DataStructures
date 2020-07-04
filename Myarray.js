class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}; 
    }

    // O(1)
    get(index){
        return this.data[index]
    }

    // O(1)
    push(item){
        this.data[this.length] = item;
        return this.length+=1;
    }

    // O(1)
    pop(){
        this.length--;
        const lastItem = this.data[this.length];
        delete this.data[this.length];
        return lastItem;
    }

    // O(n)
    delete(index){
        const deleteItem = this.data[index];
        this.shiftItems(index);
        return this.data;
    }

    //O(n)
    shiftItems(index){
        for (let i=index; i<this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        this.pop();
    }
}

const test = new MyArray();
console.log(test.push('a'));
console.log(test.push('b'));
console.log(test.push('c'));
console.log(test.delete(1));
console.log(test);
