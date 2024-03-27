const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Events", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/09_events/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    await expect(contract.setName("John Doe")).to.emit(contract, "nameEvent").withArgs("John Doe");
  });
});
