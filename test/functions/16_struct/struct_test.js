const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Struct", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/16_struct/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    await contract.create("Smart Contract is awesome!");

    let [text, completed] = await contract.get(0);
    expect(text).to.equal("Smart Contract is awesome!");
    expect(completed).to.equal(false);
  });
});
