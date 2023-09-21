const expect = require("chai").expect;
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("test spy utils function (calculateNumber)", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    const result = sendPaymentRequestToApi(100, 20);

    expect(spy.returnValues[0]).to.be.equal(result);
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });
});
