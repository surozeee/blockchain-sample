const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Imports", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/18_imports/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    expect(await contract.callOtherContract(2, 3)).to.equal(5);
  });
});
