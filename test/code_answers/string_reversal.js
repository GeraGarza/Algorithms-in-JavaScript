// USE built-in reverse
export const reverse = (string) => string.split("").reverse().join("");

// NO split reduce
export const _reverse = (string) => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};

// USE split reduce
export const __reverse = (string) =>
  string.split("").reduce((result, character) => character + result);
