export const pyramid = (number) => {
  let levels = "";
  const midpoint = Math.floor((2 * number - 1) / 2);

  for (let row = 0; row < number; row++) {
    let level = "";
    for (let column = 0; column < 2 * number - 1; column++)
      level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
    levels += level + "\n";
  }

  return levels;
};

export const _pyramid = (number, row = 0, level = "", levels = "") => {
  if (number === row) return levels;

  if (2 * number - 1 === level.length)
    return _pyramid(number, row + 1, "", levels + level + "\n");

  const midpoint = Math.floor((2 * number - 1) / 2);
  return _pyramid(
    number,
    row,
    level +
      (midpoint - row <= level.length && level.length <= midpoint + row
        ? "#"
        : " "),
    levels
  );
};
