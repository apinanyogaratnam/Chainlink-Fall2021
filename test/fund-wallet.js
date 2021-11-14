const { expect } = require("chai");
const { ethers } = require("hardhat");

const GWEI = ethers.BigNumber.from(10).pow(8);

describe("Metaverse Fund Wallet contract", function () {
    let owner, accounts, walletOwners, fundWallet;
    before(async function() {
        walletOwners = [];
        [owner] = await ethers.getSigners();
        accounts = await ethers.getSigners();
        const FundWallet = await ethers.getContractFactory("FundWallet")

        for(i = 0; i <=3 ; i++ ) {
            walletOwners.push(accounts[i].address);
        }
        fundWallet = await FundWallet.deploy(walletOwners, 1);
    });

    it("Check wallet ownership", async function () {
        let isOwner = await fundWallet.isOwner(owner.address);
        expect(isOwner).to.equal(true);
    });

    it("Create transaction", async function() {
        let gas_limit = "0x100000"
        const tx = {
            from: owner.address,
            to: fundWallet.address,
            value: ethers.utils.parseEther('0.5'),
            nonce: owner.nonce,
            gasLimit: ethers.utils.hexlify(gas_limit), // 100000
            gasPrice: 1,
        }
        let utf8Encode = new TextEncoder();
        let encoded = utf8Encode.encode(JSON.stringify(tx))
        await fundWallet.submitTransaction(accounts[1].address, 1000, encoded);
    });   
    it("Transaciton exists and is confirmed", async function() {
        let transaction = await fundWallet.transactions(0);

        let confirmed = await fundWallet.isConfirmed(0);
        
        expect(transaction).not.equal(null);
        expect(confirmed).to.equal(true);
    });
    it("Execute transaction", async function() {
        await fundWallet.executeTransaction(0);
        let transaction = await fundWallet.transactions(0);
    });});