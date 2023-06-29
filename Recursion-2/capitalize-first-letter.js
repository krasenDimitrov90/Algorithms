function capitalizeFirst(words) {
    if (words.length === 1) {
        return [words[0][0].toUpperCase() + words[0].substr(1)];
      }
      const res = capitalizeFirst(words.slice(0, -1));
      const string = words.slice(words.length - 1)[0][0].toUpperCase() + words.slice(words.length-1)[0].substr(1);
      res.push(string);
      return res;
}

  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']