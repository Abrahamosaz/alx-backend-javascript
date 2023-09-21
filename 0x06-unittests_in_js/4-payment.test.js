const expect = require("chai").expect;
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("test spy utils function (calculateNumber)", () => {
    const spy = sinon.spy(console, "log");
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(spy.withArgs("The total is: 10").calledOnce).to.be.true;
    expect(stub.withArgs("SUM", 100, 20).calledOnce).to.be.true;
  });
});
