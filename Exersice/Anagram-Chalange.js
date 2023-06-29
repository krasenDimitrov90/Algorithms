// check the two strings that has the same charachters beside there order
function isValidAnagram(str1, str2) {
    // Check the length of both strings for equality
    if (str1.length !== str2.length) {
        return false;
    }
    // For the first string count how many times a charachter is in the string
    const str1Characters = {};
    const str2Characters = {};
    for (let char of str1) {
        if (!str1Characters[char]) {
            str1Characters[char] = 0;
        } 
        str1Characters[char] += 1;
    }
    // For the second string count how many times a character is in the string
    for (let char of str2) {
        if (!str2Characters[char]) {
            str2Characters[char] = 0;
        }
        str2Characters[char] += 1;
    }
    // Compare both results for every character for equality
    
    let charactersOfStr1 = Object.keys(str1Characters);
    for (let char of charactersOfStr1) {
        if (str1Characters[char] !== str2Characters[char]) {
            return false;
        }
    }

    return true;

}

console.log(isValidAnagram('','')); //true
console.log(isValidAnagram('aaz','zza')); // false
console.log(isValidAnagram('anagram','nagaram'));// true
console.log(isValidAnagram('rat','car')); // false
console.log(isValidAnagram('awesome','awesom')); // false
console.log(isValidAnagram('qwerty','qeywrt')); // true
console.log(isValidAnagram('texttwisttime','timetwisttext')); // true
