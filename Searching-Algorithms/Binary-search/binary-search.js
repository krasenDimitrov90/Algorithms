// Teacher's Solution
// function binarySearch(arr, elem) {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }


function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[middle] === val) return middle;
        if (arr[left] === val) return left;
        if (arr[right] === val) return right;
        if (arr[middle] < val) {
            left = middle + 1;
        } else if (arr[middle] > val) {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 5, 6], 4));