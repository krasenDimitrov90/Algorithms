function productOfArray(nums) {
    if (nums.length === 0) return 1;
    return nums[nums.length - 1] * productOfArray(nums.slice(0, -1));
}

console.log(productOfArray([1, 2, 3,])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60