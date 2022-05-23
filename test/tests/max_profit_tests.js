
  const { assert } = chai;
  import {maxProfit} from "../code/max_profit.js"


  describe("Max Profit", () => {
    xit("Should return minimum buy price and maximum sell price", () => {
      assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
      assert.deepEqual(maxProfit([2, 1, 5, 3, 4]), [1, 5]);
      assert.deepEqual(maxProfit([2, 10, 1, 3]), [2, 10]);
      assert.deepEqual(maxProfit([2, 1, 2, 11]), [1, 11]);
      assert.deepEqual(maxProfit([2, 3, 1, 5, 4]), [1, 5]);
      assert.deepEqual(maxProfit([1, 2, 5, 3, 4]), [1, 5]);
      assert.deepEqual(maxProfit([2, 10, 5, 1, 3]), [2, 10]);
    });
  });
  