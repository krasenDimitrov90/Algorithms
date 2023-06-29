function capitalizeWords(words) {

    if (words.length === 1) {
        return [words[0].toUpperCase()];
      }
      const res = capitalizeWords(words.slice(0, -1));
      const string = words.slice(words.length - 1)[0].toUpperCase();
      res.push(string);
      return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']