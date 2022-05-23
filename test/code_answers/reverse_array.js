export const reverseArray = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

export const _reverseArray = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }
  return array;
};
