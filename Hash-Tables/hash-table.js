class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return Math.abs(total);
    }

    set(key, val) {
        let idx = this._hash(key);
        if (this.keyMap[idx] === undefined) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push([key, val]);

        return idx;
    }

    get(key) {
        let idx = this._hash(key);
        if (!this.keyMap[idx]) return undefined;
        let subArray = this.keyMap[idx];
        for (let i = 0; i < subArray.length; i++) {
            if (subArray[i][0] === key) {
                return subArray[i][1];
            }
        }

        return undefined;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue;

            for (let j = 0; j < this.keyMap[i].length; j++) {
                keys.push(this.keyMap[i][j][0]);
            }
        }

        return keys;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue;

            for (let j = 0; j < this.keyMap[i].length; j++) {
                values.push(this.keyMap[i][j][1]);
            }
        }

        return values;
    }
}

let ht = new HashTable(3);
console.log(ht.set("black", '#000000'));
console.log(ht.set("yellow", '#ffff00'));
console.log(ht.set("white", '#ffffff'));

console.log(ht.get("black"));
console.log(ht.get("yellow"));
console.log(ht.get("white"));

// console.log(ht);

console.log(ht.keys());
console.log(ht.values());