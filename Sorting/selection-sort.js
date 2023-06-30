function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Big O(n^2)

function selectionSort(nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIdx] > nums[j]) {
                minIdx = j;
            }
        }   
        if (i !== minIdx) swap(nums, i, minIdx);
    }
}

let nums = [9,1,8,3,5,7,6,4,2];
selectionSort(nums);

console.log(nums)