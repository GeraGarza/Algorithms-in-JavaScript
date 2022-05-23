const { assert } = chai;
import {reverseArray, _reverseArray} from "../code/reverse_array.js"

describe("Reverse Arrays", () => {
  xit("Should reverse arrays", () => {
    assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    assert.deepEqual(_reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });
});
