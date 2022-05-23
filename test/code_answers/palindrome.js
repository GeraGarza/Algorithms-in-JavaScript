export const isPalindrome = (string) => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringCharacters = string
    .toLowerCase()
    .split("")
    .reduce(
      (characters, character) =>
        validCharacters.indexOf(character) > -1
          ? characters.concat(character)
          : characters,
      []
    );
  return stringCharacters.join("") === stringCharacters.reverse().join("");
};

export const _isPalindrome = (string) =>
  string
    .split("")
    .every(
      (character, index) => character === string[string.length - 1 - index]
    );

export const __isPalindrome = (string) => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();

  return cleaned === cleaned.split("").reverse().join("");
};
