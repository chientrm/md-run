const chai = require("chai");
const { expect } = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { describe, it } = require("mocha");
const { read } = require("./reader.js");

chai.use(chaiAsPromised);

describe("read text from uri", () => {
  it("invalid uri", async () => {
    await expect(read("file:///abc.txt")).to.be.rejectedWith(
      "File does not exist at the specified endpoint"
    );
  });
  it("read local file", async () => {
    expect(await read(`file:///${__dirname}/reader.test.txt`)).to.equal(
      "Hello\nWorld"
    );
  });
});
