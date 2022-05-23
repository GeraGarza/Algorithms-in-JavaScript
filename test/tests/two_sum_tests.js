const { assert } = chai;
import { twoSum } from "../code/two_sum.js";

describe("Two Sum", () => {
  xit("Should implement two sum", () => {
    assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [
      [2, 2],
      [3, 1],
    ]);
  });
});
