// Big O(n log n)
// O(n) for spilting ( decomposition ) the array till it get's length of 1
// O(log n) because the merge function itself has that time complexity
// Space complexity O(n)

function mergeSort(arr, sorted = []) {
    if (arr.length === 0) return [];

    let length = arr.length;
    let firstHalf = arr.slice(0, Math.floor(length / 2));
    let secondHalf = arr.slice(length / 2);

    if (firstHalf.length > 1) {
        firstHalf = mergeSort(firstHalf, sorted);
    }
    if (secondHalf.length > 1) {
        secondHalf = mergeSort(secondHalf, sorted);
    }

    sorted = merge(firstHalf, secondHalf);

    return sorted;
}

console.log(mergeSort([2, 14, 99, 100, 1, 10, 50]));

// [2, 14, 99]    [100, 1, 10, 50]
// [2] [14, 99]   [100, 1]  [10, 50]
//   [14] [99]    [100] [1]  [10] [50]

function merge(arr1, arr2) {
    let newArr = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arr1.length || idx2 < arr2.length) {
        if (arr1[idx1] < arr2[idx2]) {
            newArr.push(arr1[idx1]);
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            newArr.push(arr2[idx2]);
            idx2++;
        } else if (idx1 - arr1.length === 0) {
            newArr.push(...arr2.slice(idx2));
            break;
        } else if (idx2 - arr2.length === 0) {
            newArr.push(...arr1.slice(idx1));
            break;
        }
    }

    return newArr;
}


// Teacher's solution

// Merge function from earlier
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// // Recrusive Merge Sort
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, sright);
// }

// mergeSort([10,24,76,73])
