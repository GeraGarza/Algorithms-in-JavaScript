const { assert } = chai;
import { Arr, Str } from '../code/sort.js';

describe("Arrays", () => {
  xit("Should implement sort", () => {
    const arr = new Arr(1, 4, 3, 2, 5);
    assert.deepEqual(arr.sort(), [1, 2, 3, 4, 5]);
    assert.deepEqual(
      arr.sort((a, b) => b - a),
      [5, 4, 3, 2, 1]
    );
    assert.deepEqual(
      arr.sort((a, b) => a - b),
      [1, 2, 3, 4, 5]
    );

    const words = new Arr(
      { word: "apple" },
      { word: "orange" },
      { word: "banana" }
    );
    assert.deepEqual(
      words.sort((a, b) => {
        if (a.word < b.word) return -1;
        if (a.word > b.word) return 1;
        return 0;
      }),
      [{ word: "apple" }, { word: "banana" }, { word: "orange" }]
    );
  });

  xit("Should implement reverse", () => {
    const arr = new Arr(1, 2, 3, 4, 5);
    assert.deepEqual(arr.reverse(), [5, 4, 3, 2, 1]);
  });

  xit("Should implement slice", () => {
    const arr = new Arr(1, 2, 3, 4, 5);
    assert.deepEqual(arr.slice(), [1, 2, 3, 4, 5]);
    assert.deepEqual(arr.slice(1), [2, 3, 4, 5]);
    assert.deepEqual(arr.slice(2, 4), [3, 4]);
  });

  xit("Should implement splice", () => {
    const arr = new Arr(1, 2, 3, 4, 5);
    assert.deepEqual(arr.splice(2, 0, 6), []);
    assert.deepEqual(arr.arr, [1, 2, 6, 3, 4, 5]);
    assert.deepEqual(arr.splice(3, 1), [3]);
    assert.deepEqual(arr.arr, [1, 2, 6, 4, 5]);
    assert.deepEqual(arr.splice(2, 1, 3), [6]);
    assert.deepEqual(arr.arr, [1, 2, 3, 4, 5]);
    assert.deepEqual(arr.splice(0, 2, 6, 7, 8), [1, 2]);
    assert.deepEqual(arr.arr, [6, 7, 8, 3, 4, 5]);
    assert.deepEqual(arr.splice(arr.arr.length - 3, 2), [3, 4]);
    assert.deepEqual(arr.arr, [6, 7, 8, 5]);
    assert.deepEqual(arr.splice(-2, 1), [8]);
    assert.deepEqual(arr.arr, [6, 7, 5]);
    assert.deepEqual(arr.splice(1), [7, 5]);
    assert.deepEqual(arr.arr, [6]);
  });
});

describe("Strings", () => {
  xit("Should implement split", () => {
    const str = new Str("hello world dude");
    assert.deepEqual(str.split(" ", 1), ["hello"]);
    assert.deepEqual(str.split(" ", 2), ["hello", "world"]);
    assert.deepEqual(str.split(" ", 3), ["hello", "world", "dude"]);
  });

  xit("Should implement replace", () => {});
});

