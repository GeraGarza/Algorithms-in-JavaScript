const { assert } = chai;
import { pyramid, _pyramid } from "../code/pyramid.js";

describe("Pyramid", () => {
  xit("Should print pyramid", () => {
    assert.equal(pyramid(3), "  #  \n ### \n#####\n");
    assert.equal(_pyramid(3), "  #  \n ### \n#####\n");
  });
});
