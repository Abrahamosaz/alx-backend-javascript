const assert = require("assert");
const calculateNum = require("./1-calcul");

describe("calculateNumber", () => {
  it("test argument with 1.4 and 4.5 and type SUM", () => {
    assert.equal(calculateNum("SUM", 1.4, 4.5), 6);
  });

  it("test argument with 1.4 and 4.5 and type SUBTRACT", () => {
    assert.equal(calculateNum("SUBTRACT", 1.4, 4.5), -4);
  });

  it("test argument with 1.4 and 4.5 and type DIVIDE", () => {
    assert.equal(calculateNum("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("test argument with 1.4 and 4.5 and type DIVIDE", () => {
    assert.equal(calculateNum("DIVIDE", 1.4, 0), "Error");
  });
});
