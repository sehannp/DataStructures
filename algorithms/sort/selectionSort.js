const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  
    // set a position - initally 1 increments as it goes
    for(let i=0;i<array.length-1;i++){
        let comparePos = i;
        
        for(let j=comparePos;j<array.length;j++){
            if(array[comparePos] > array[j]){
                let swap = array[comparePos];
                array[comparePos] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}

console.log(selectionSort(numbers));