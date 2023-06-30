function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function insertionSort(nums) {

    for (let i = 1; i < nums.length; i++) {
        let idx = i - 1;
        let currentVal = nums[i];
        while (idx >=0 && nums[idx] > currentVal) {
            nums[idx + 1] = nums[idx];
            idx--;
        }
        nums[idx + 1] = currentVal;
    }

}


let nums = [9,1,8,3,5,7,6,4,2];
insertionSort(nums);

console.log(nums)