function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function findPivotIndex(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = findPivotIndex(arr, left, right);

        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);

        return arr;
    }
}

console.log(quickSort([5, 8, 9, 3, 4, 1, 6, 7, 2]));
console.log(quickSort([9, 5, 8, 3, 4, 1, 6, 7, 10, 2]));