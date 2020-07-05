const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    let sortedArray = [];

    for(let i=0; i<array.length;i++){
        let value = array[i];
        
        //if there is atleast 2 elements in the array, start comparing.
        if(sortedArray.length > 1){

            //if smaller than the smallest, add first
            if (value < sortedArray[0]){
                sortedArray.splice(0,0,value);
            }
            // if larger than the largest add last
            else if(value > sortedArray[sortedArray.length-1]){
                sortedArray.push(value);
            }
            else {
                //find if it fits between any pair
                for(let j=0; j<sortedArray.length;j++){
                    if(value >= sortedArray[j] && value < sortedArray[j+1]){
                        sortedArray.splice(j+1,0,value);
                        //break early if found
                        break;
                    }
                }
            }
        }

        //if there is only 1, then it should just be compared and added as 1st or 2nd
        else if (sortedArray.length === 1){
            (value > sortedArray[0]) ? sortedArray[1] = value : sortedArray.splice(0,0,value);
        }

        //if its empty just add
        else{
            sortedArray.push(value);
        }

    }
    return sortedArray;

}

console.log(insertionSort(numbers));