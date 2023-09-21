const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("testing with hooks", () => {
  beforeEach(() => {
    sinon.spy(console, "log");
  });

  afterEach(() => {
    console.log.restore();
  });

  it("sendPaymentRequestToAPI with 100 and 20", () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  });

  it("sendPaymentRequestToAPI with 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });
});
