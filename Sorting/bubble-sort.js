function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Big O(n^2)

function bubbleSort(arr) {
    let noSwaps = true;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
}

let nums = [9,1,8,3,5,7,6,4,2];
bubbleSort(nums);

console.log(nums)