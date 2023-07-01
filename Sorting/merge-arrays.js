// Merging two arrays that are already sorted,
// and sort them while merging

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


console.log(merge([2, 14, 99, 100], [1, 10, 50]));