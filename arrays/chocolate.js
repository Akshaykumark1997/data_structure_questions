/*

Given an array arr[] of n integers where arr[i] represents the number of chocolates in ith packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

Each student gets exactly one packet.
The difference between the maximum and minimum number of chocolates in the packets given to the students is minimized.
Examples:

Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3 
Output: 2 
Explanation: If we distribute chocolate packets {3, 2, 4}, we will get the minimum difference, that is 2. 


Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 5 
Output: 7
Explanation: If we distribute chocolate packets {3, 2, 4, 9, 7}, we will get the minimum difference, that is 9 – 2 = 7. 

*/

// solution
const arr = [7, 3, 2, 4, 9, 12, 56];
const m = 5;

function findSubarrays(arr, m) {
  const subarrays = [];

  for (let i = 0; i <= arr.length - m; i++) {
    subarrays.push(arr.slice(i, i + m));
  }

  return subarrays;
}
const result = findSubarrays(arr, m);

let minimumValues = [];
for (let i = 0; i < result.length; i++) {
  let max = Math.max(...result[i]);
  let min = Math.min(...result[i]);
  minimumValues.push(max - min);
}
console.log(Math.min(...minimumValues));
