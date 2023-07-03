// This function return the "i" digit from a given number
// For example getDigit(1234, 0) returns 4, getDigit(1234, 1) => 3, and so on
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// This function gives the length of a given number
function getDigitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigets(arr) {
    let maxDigets = 0;
    for (let num of arr) {
        maxDigets = Math.max(maxDigets, getDigitCount(num));
    }

    return maxDigets;
}

// Big O(nk)

function radixSort(arr) {
    let maxDigets = mostDigets(arr);
    let tempArr = [];

    for (let i = 0; i < maxDigets; i++) {

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            if (!tempArr[digit]) {
                tempArr[digit] = [];
            }
            tempArr[digit].push(arr[j]);
        }

        arr = [];
        for (let innerArr of tempArr) {
            arr = arr.concat(innerArr || []);
        }

        tempArr = [];
    }

    return arr;
}

console.log(radixSort([987, 5, 54, 3, 78, 123, 111, 3, 99, 105, 978, 2564, 4923, 9178]));

// Teacher's solution

// function radixSort(nums){
//     let maxDigitCount = mostDigits(nums);
//     for(let k = 0; k < maxDigitCount; k++){
//         let digitBuckets = Array.from({length: 10}, () => []);
//         for(let i = 0; i < nums.length; i++){
//             let digit = getDigit(nums[i],k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }