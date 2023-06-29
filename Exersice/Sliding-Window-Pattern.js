// Write a function wich accepts an array of integers and a number called n.
// The function should calculate the max sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    // Instead of nesting loops , we use the Sliding Window Pattern
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))