// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
//example
/* 
    input : arr = [2,4,3,6,9,5]
    output : Minimum element is : 1
        Maximum element is : 9
*/

//solution

const arr = [2, 4, 3, 6, 9, 5,12];
let max = arr[0];
let min = arr[0];

for(let i = 0; i< arr.length;i++){
    if(max < arr[i]) max = arr[i];
    if(min > arr[i]) min = arr[i]
}

console.log(`Minimum element is : ${min}`);
console.log(`Maximum element is : ${max}`);