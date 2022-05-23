const { assert } = chai;
import {reverse, __reverse, _reverse} from '../code/string_reversal.js';

describe("String Reversal", () => {
  xit("Should reverse string", () => {
    assert.equal(reverse("Hello World!"), "!dlroW olleH");
    assert.equal(_reverse("Hello World!"), "!dlroW olleH");
    assert.equal(__reverse("Hello World!"), "!dlroW olleH");
  });
});