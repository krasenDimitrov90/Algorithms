
// Write a function called averagePair.Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array 
// where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

function sum(a, b) {
    return a + b;
}

function averagePair(numbers, num) {

    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        let average = sum(numbers[start], numbers[end]) / 2;

        if (average === num) {
            return true;
        } else if (average < num) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}


console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false