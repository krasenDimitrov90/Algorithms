function collectStrings(obj, memo = []) {

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            memo.push(obj[key]);
        } else {
            return collectStrings(obj[key], memo);
        }
    }

    return memo;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    },
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])