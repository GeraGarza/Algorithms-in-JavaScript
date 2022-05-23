const { assert } = chai;
import {reverse} from '../code/int_reversal.js';


describe("Integer Reversal", () => {
  xit("Should reverse integer", () => {
    assert.equal(reverse(1234), 4321);
    assert.equal(reverse(-1200), -21);
  });
});