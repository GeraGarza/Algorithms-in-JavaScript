
const { assert } = chai;
import { Obj } from '../code/iterate.js';


describe("Arrays", () => {
  xit("Should implement indexOf", () => {
    const arr = new Obj(["a", "b", "c"]);
    assert.equal(arr.indexOf("b"), 1);
    assert.equal(arr.indexOf("e"), -1);
  });

  xit("Should implement lastIndexOf", () => {
    const arr = new Obj(["a", "b", "c"]);
    assert.equal(arr.lastIndexOf("a"), 0);
    assert.equal(arr.lastIndexOf("e"), -1);
  });

  xit("Should implement includes", () => {
    const arr = new Obj(["a", "b", "c"]);
    assert.equal(arr.includes("c"), true);
    assert.equal(arr.includes("e"), false);
  });

  xit("Should implement fill", () => {
    const arr = new Obj(["a", "b", "c"]);
    assert.deepEqual(arr.fill("e"), ["e", "e", "e"]);
  });

  xit("Should implement join", () => {
    const arr = new Obj(["a", "b", "c"]);
    assert.equal(arr.join(", "), "a, b, c");
  });
});

describe("Objects", () => {
  xit("Should implement findIndex", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.equal(
      obj.findIndex((value, key) => value === 2),
      "b"
    );
    assert.equal(
      obj.findIndex((value, key) => value === 3),
      null
    );
  });

  xit("Should implement find", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.equal(
      obj.find((value, key) => value === 2),
      2
    );
    assert.equal(
      obj.find((value, key) => value === 3),
      undefined
    );
  });

  xit("Should implement filter", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.deepEqual(
      obj.filter((value, key) => value > 0),
      { a: 1, b: 2 }
    );
    assert.deepEqual(
      obj.filter((value, key) => value > 2),
      {}
    );
  });

  xit("Should implement forEach", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.deepEqual(
      obj.forEach((value, key) => value * 2),
      { a: 2, b: 4 }
    );
  });

  xit("Should implement map", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.deepEqual(
      obj.map((value, key) => value * 3),
      { a: 3, b: 6 }
    );
  });

  xit("Should implement some", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.equal(
      obj.some((value, key) => value > 1),
      true
    );
    assert.equal(
      obj.some((value, key) => value > 2),
      false
    );
  });

  xit("Should implement every", () => {
    const obj = new Obj({ a: 1, b: 2 });
    assert.equal(
      obj.every((value, key) => value > 0),
      true
    );
    assert.equal(
      obj.every((value, key) => value > 1),
      false
    );
  });

  xit("Should implement reduce", () => {
    const obj1 = new Obj({ a: 1, b: 2 });
    assert.equal(
      obj1.reduce((sum, value, key) => sum + value, 0),
      3
    );

    const obj2 = new Obj({ a1: { b1: 1, b2: 2 }, a2: { b3: 3, b4: 4 } });
    assert.deepEqual(
      obj2.reduce(
        (accumulator, value, key) => ({ ...accumulator, ...value }),
        {}
      ),
      { b1: 1, b2: 2, b3: 3, b4: 4 }
    );
  });

  xit("Should flatten objects", () => {
    const flatten = (obj) => {
      if (obj instanceof Obj) {
        return obj.reduce(
          (accumulator, value, key) =>
            Object.assign({}, accumulator, flatten(new Obj(value))),
          {}
        );
      }
      return obj;
    };
    assert.deepEqual(
      flatten(
        new Obj({
          a1: { b1: 1, b2: { c1: 1, c2: 2 } },
          a2: { b3: 3, b4: { c3: 3, c4: 4 } },
        })
      ),
      { b1: 1, c1: 1, c2: 2, b3: 3, c3: 3, c4: 4 }
    );
  });
});
