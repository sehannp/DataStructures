//A class that models HashTable. Built using JS array.

class HashTable {

    constructor(size){
        this.data = new Array(size);
    }

    //mock hash function
    _hash(key){
        let hash = 0;
        for(let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i)*i)% this.data.length
        }
        return hash; 
    }

    set(key,val){
        this.data[this._hash(key)] = val;
        return this.data;
    }

    get(key){
        return this.data[this._hash(key)];
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash('grapes'));
console.log(myHashTable.set('grapes',10000));
console.log(myHashTable.get('grapes'));

