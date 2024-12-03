/* 
Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

Example:

Input: S = “geeksforgeeks”
Output:
e, count = 4
g, count = 2
k, count = 2
s, count = 2
*/

function count(str) {
  const obj = {};
  for (const char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  Object.keys(obj).forEach((ob) => {
    if (obj[ob] > 1) {
      console.log(`${ob}, count = ${obj[ob]}`);
    }
  });
}
let s = "geeksforgeeks";
count(s);
