const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Pure and View Functions", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/06_pure_and_view_functions/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    expect(await contract.getName()).to.equal("John Doe");
    expect(await contract.sum(1, 2)).to.equal(3);
  });
});
