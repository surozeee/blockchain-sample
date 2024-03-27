const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Functions / Enum", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory(
      "contracts/functions/15_enum/MyContract.sol:MyContract"
    );
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variable values", async function () {
    expect(await contract.status()).to.equal(0);

    await contract.ship();
    expect(await contract.status()).to.equal(1);
  });
});
