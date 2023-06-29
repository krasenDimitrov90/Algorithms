function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function sort(arr) {
    let noSwaps = true;
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
            count++
        }
        if (noSwaps) break;
    }
}

let nums = [1,2,3,4,5];
sort(nums);

console.log(nums)