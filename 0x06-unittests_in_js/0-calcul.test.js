const assert = require("assert");
const calculNum = require("./0-calcul");

describe("calculateNumber", () => {
  it("test with argument 1 and 3", () => {
    assert.equal(calculNum(1, 3), 4);
  });

  it("test with argument 1 and 3.5", () => {
    assert.equal(calculNum(1, 3.5), 5);
  });

  it("test with argument 1.2 and 3.5", () => {
    assert.equal(calculNum(1.2, 3.5), 5);
  });

  it("test with argument 1.5 and 3.7", () => {
    assert.equal(calculNum(1.5, 3.7), 6);
  });
});
