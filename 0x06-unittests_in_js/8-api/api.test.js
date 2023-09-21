const expect = require("chai").expect;
const request = require("request");

const URL = "http://localhost:7865";

describe("Index page", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };
  it("test the index page route status code", (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("test the index  route content", (done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("test the index route for content length", (done) => {
    request(options, function (err, res, body) {
      expect(res.headers["content-length"]).to.equal("29");
      done();
    });
  });
});
