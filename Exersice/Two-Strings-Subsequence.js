// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a
// subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

// My Approach

function isSubsequence(str1, str2) {

    let mostLength = Math.max(str1.length, str2.length);
    let newStr = '';
    let index = 0;
    for (let i = 0; i < mostLength; i++) {
        if (str2[i] === str1[index]) {
            newStr += str2[i];
            index++;
        }
        if (newStr === str1) {
            return true;
        }
    }

    return false;
}

// Teacher's Approach

// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }


console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('abc', 'a')); // false (order matters)