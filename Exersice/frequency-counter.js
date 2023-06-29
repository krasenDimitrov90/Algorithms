// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(num1, num2) {
    let num1Stringify = num1.toString();
    let num2Stringify = num2.toString();

    if (num1Stringify.length !== num2Stringify.length) {
        return false;
    }

    let num1FrequencyDigets = {};
    let num2FrequencyDigets = {};

    for (let i = 0; i < num1Stringify.length; i++) {
        num1FrequencyDigets[num1Stringify[i]] = (num1FrequencyDigets[num1Stringify[i]] || 0) + 1;
    }

    for (let i = 0; i < num2Stringify.length; i++) {
        num2FrequencyDigets[num2Stringify[i]] = (num2FrequencyDigets[num2Stringify[i]] || 0) + 1;
    }

    for (let diget in num1FrequencyDigets) {
        if (!num2FrequencyDigets.hasOwnProperty(diget) ||
            num1FrequencyDigets[diget] !== num2FrequencyDigets[diget]) {
            return false;
        }
    }

    return true;
}


console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false