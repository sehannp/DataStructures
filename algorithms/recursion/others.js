
//prints all elements in array
function printAll(inpArray){
    // base case
    if (inpArray.length === 1){
        return console.log(inpArray[0]);
    }
    //recursive case
    return printAll(inpArray.slice(1)) ;
};

// printAll(["a","b","c"]);


//returns boolean if input is a palindrome text
function palindromeDetect(inpString){
    //base case
    if(inpString.length < 2){
        return true;
    }
        //recursive case
    else{
        if (inpString[0] === inpString[inpString.length-1]){
            return palindromeDetect(inpString.slice(1,inpString.length-1));
        }
        else{
            return false;
        }
    }

}

// console.log(palindromeDetect("dabcbad"));


//returns the power of a number
function powerValue(num,power){
    //base case
    if (power === 1){
        return num * power;
    }
    //recursive case
    return powerValue(num,power-1) * num;
}

// console.log(powerValue(3,4));


//model map function without using loops
let resultArray = [];
function mapArray(inpArray,inpFunction){
    //base case
    if (inpArray.length < 2){
        resultArray.push(inpFunction(inpArray[0]));
        return resultArray;
    }

    //recursive case
    resultArray.push(inpFunction(inpArray[0]));
    return mapArray(inpArray.slice(1),inpFunction);
}


// console.log(mapArray([1,2,3],(value) => {
//     return value +1;
// }));

// 0 1 1 2 3 5

//fibonacci sequence former
function fibonacciRecursive(n) {
    let arr= [0,1]
    const fibo=()=>{
        if(arr.length <= n){
            arr.push(arr[arr.length-1]+arr[arr.length-2])
            return fibo()
        }
    }
    fibo()
    return arr
}

function fibonacciRecursive(n) {
    if (n < 2){
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
}

console.log(fibonacciRecursive(3));
// console.log(myarray);

// finds the sum of digits of n
let sum = 0;
function digitSum(n,k){
    if (isNaN(n) || isNaN(k)){
        return null;
    }
    else if (n <= 0 || k <= 0){
        return 0;
    }

    if(k === 1){
        sum = n.toString().split("").reduce((total,currentValue) => total+parseInt(currentValue),0) + sum;
        return sum;
    }
    return digitSum(n,k-1) + sum ;
}

// console.log(digitSum(148,3));

//finds the sum of digits to the last digit.
function superDigit(n, k) {
    n = n.split("").reduce((a, b) => +a + +b) * k + "";
    return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
}