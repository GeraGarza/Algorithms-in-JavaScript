const { assert } = chai;
import {chunk, _chunk, __chunk} from "../code/array_chunking.js"

describe("Array Chunking", () => {
  xit("Should implement array chunking", () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

    assert.deepEqual(_chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(_chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(_chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

    assert.deepEqual(__chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(__chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(__chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
  });
});
