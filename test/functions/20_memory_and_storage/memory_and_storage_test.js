const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Memory and Storage", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/20_memory_and_storage/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy("Doe", "John");
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    expect(await contract.fullname()).to.equal("John Doe");
  });
});
