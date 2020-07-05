const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    for(let j=0;j<array.length-1;j++){
        //since last element is already sorted, no need to iterate till last in the next run
        let endpos = array.length-j;

        for(let i=0; i<endpos-1; i++){
            if(array[i] > array[i+1]){
                let swap = array[i];
                array[i] = array[i+1];
                array[i+1] = swap;
            }
        }
    }

    return array;
}

bubbleSort(numbers);
console.log(numbers);