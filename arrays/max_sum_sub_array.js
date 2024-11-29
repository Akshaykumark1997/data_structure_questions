// Given an integer array nums, find the  subarray with the largest sum, and return its sum.

/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

const maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// high complexity solution

// const maxSubArray2 = function (nums) {
//   //    const res = [];
//   //    for(let i = 0; i< nums.length; i++){
//   //     for(let j = i; j< nums.length;j++){
//   //         res.push(nums.slice(i,j+1))
//   //     }
//   //    }
//   //    let sum = res[0]?.reduce((a,b)=> a+=b,0)
//   //     for(let i = 0; i< res.length; i++){
//   //         let s = res[i]?.reduce((a,b)=> a+=b,0)
//   //         if(sum < s) {
//   //             sum = s;
//   //         }
//   //     }
//   //     return sum
// };
