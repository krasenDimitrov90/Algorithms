// Use Multiple Points

function countUniqueValues(sortedNumbers) {
    let count = sortedNumbers.length > 0 ? 1 : 0;
    let i = sortedNumbers[0];
    for (let j = 0; j < sortedNumbers.length; j++) {
        if (sortedNumbers[j] !== i) {
            count++;
            i = sortedNumbers[j];
        }
    }
    return count;
} 



console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4