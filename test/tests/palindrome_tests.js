const { assert } = chai;
import {isPalindrome,_isPalindrome,__isPalindrome} from '../code/palindrome.js';


describe("Palindrome", () => {
  xit("Should return true", () => {
    assert.equal(
      isPalindrome("Cigar? Toss xit in a can. It is so tragic"),
      true
    );
    assert.equal(
      __isPalindrome("Cigar? Toss xit in a can. It is so tragic"),
      true
    );
  });

  xit("Should return false", () => {
    assert.equal(isPalindrome("sit ad est love"), false);
    assert.equal(_isPalindrome("sit ad est love"), false);
  });
});
