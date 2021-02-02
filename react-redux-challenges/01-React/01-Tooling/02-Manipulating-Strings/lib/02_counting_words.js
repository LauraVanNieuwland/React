function occurrences(text, word) {
  const textUpperCase = text.toUpperCase();
  const wordUpperCase = word.toUpperCase();
  // make an array of the text
  const splittedText = textUpperCase.split(" ");
  // count how many times the word is in the array
  const counter = splittedText.filter(x => x === wordUpperCase).length;
  return counter;
}

module.exports = occurrences;
