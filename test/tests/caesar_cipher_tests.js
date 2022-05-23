const { assert } = chai;
import {caesarCipher, _caesarCipher} from "../code/caesar_cipher.js"

describe("Caesar Cipher", () => {
  xit("Should shift to the right", () => {
    assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
    assert.equal(
      _caesarCipher("I love JavaScript!", 100),
      "E hkra FwrwOynelp!"
    );
  });

  xit("Should shift to the left", () => {
    assert.equal(
      caesarCipher("I love JavaScript!", -100),
      "M pszi NezeWgvmtx!"
    );
    // assert.equal(_caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
  });
});
