const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Apps / Sample Contract", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/apps/01_sample_contract/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    await contract.setAge(40);
    await contract.setName("John Doe");

    expect(await contract.getAge()).to.equal(40);
    expect(await contract.getName()).to.equal("John Doe");
  });
});
