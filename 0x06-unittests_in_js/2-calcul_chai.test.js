const expect = require("chai").expect;
const calculateNum = require("./2-calcul_chai");

describe("calculateNumber", () => {
  it("test argument with 1.4 and 4.5 and type SUM", () => {
    expect(calculateNum("SUM", 1.4, 4.5)).to.be.equal(6);
  });

  it("test argument with 1.4 and 4.5 and type SUBTRACT", () => {
    expect(calculateNum("SUBTRACT", 1.4, 4.5)).to.be.equal(-4);
  });

  it("test argument with 1.4 and 4.5 and type DIVIDE", () => {
    expect(calculateNum("DIVIDE", 1.4, 4.5)).to.be.equal(0.2);
  });

  it("test argument with 1.4 and 4.5 and type DIVIDE", () => {
    expect(calculateNum("DIVIDE", 1.4, 0)).to.be.equal("Error");
  });
});
