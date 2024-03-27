const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Error Handling", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/10_error_handling/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    await contract.deposit(100);

    expect(await contract.balance()).to.equal(100);
  });
});
