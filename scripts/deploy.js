import { ethers } from "ethers";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contravts with the account: ${deployer.address}`);

    const balance = await deployer
    console.log(`Account balance: ${balance.toString()}`);

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    console.log(`Greeter address: ${greeter.address}`);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });