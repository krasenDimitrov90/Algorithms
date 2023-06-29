// function flatten(arr, memo = []) {

//     for (let el of arr) {
//         if (Array.isArray(el)) {
//             flatten(el, memo);
//         } else {
//             memo.push(el);
//         }
//     }

//     return memo;
// }

function flatten(arr) {

    let newArr = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            newArr.push(...flatten(el));
        } else {
            newArr.push(el);
        }
    }

    return newArr;
}

  console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])); // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]