const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Functions", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/04_functions/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    expect(await contract.getName()).to.equal("");

    await contract.setName("Hello Functions");
    expect(await contract.getName()).to.equal("Hello Functions");
  });
});
