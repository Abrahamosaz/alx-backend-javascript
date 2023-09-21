const expect = require("chai").expect;
const getPaymentTokenFromAPi = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("test when success is true", (done) => {
    getPaymentTokenFromAPi(true).then((data) => {
      expect(data).to.have.own.property("data");
      done();
    });
  });
});
