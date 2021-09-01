function pivotIndex(arr) {
    let sum = arr.reduce((acc, curr) => (acc + curr));
    let left = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (sum - left - arr[i] === left) return i;
        if (arr[i] !== 0) left += arr[i];
    }
    return sum;
}
let test = [1,7,3,6,5,6];
console.log(pivotIndex(test));