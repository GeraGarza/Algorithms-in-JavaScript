export const chunk = (array, size) => {
  const chunks = [];

  for (let item of array) {
    const lastChunk = chunks[chunks.length - 1];
    if (!lastChunk || lastChunk.length === size) chunks.push([item]);
    else lastChunk.push(item);
  }

  return chunks;
};

export const _chunk = (array, size) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }

  return chunks;
};

export const __chunk = (array, size) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
};
