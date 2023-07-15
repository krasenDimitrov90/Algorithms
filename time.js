let t = new Date();
console.log(t.getHours(), t.getMinutes(), t.getSeconds())

let obj = {}
// console.log(obj['5'])

for (let i = 1; i <= 100000000; i++) {
    obj[i] = true;
}

// console.log(obj[1])

let t2 = new Date();
console.log(t2.getHours(), t2.getMinutes(), t2.getSeconds())
