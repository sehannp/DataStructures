
function findFactorialRecursive(number) {
    if (number < 2){
        return number;
    }
    return number * findFactorialRecursive(number-1);
}
  
function findFactorialIterative(number) {
    let value = 1;

    if (number <= 2){
        return number;
    }

    for (let i=2; i<=number; i++){
      value = value * i;
    }
    return value;
}
  
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
