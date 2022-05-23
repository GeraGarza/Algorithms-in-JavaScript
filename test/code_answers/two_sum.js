export const twoSum = (array, sum) => {
  const pairs = [];
  const store = [];

  for (let part1 of array) {
    const part2 = sum - part1;
    if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
    store.push(part1);
  }

  return pairs;
};
