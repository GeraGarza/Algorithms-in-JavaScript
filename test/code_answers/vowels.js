export const vowels = (string) => {
  let count = 0;
  const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']

  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;

  return count;
};

export const _vowels = (string) => {
  let matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
