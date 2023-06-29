// Naive Solution

function findString(str, match) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < match.length; j++) {

            if (str[j + i] !== match[j]) break;
            if (j === match.length - 1) count++;
        }
    }

    return count;
}

console.log(findString('wowomgzomg', 'omg'))