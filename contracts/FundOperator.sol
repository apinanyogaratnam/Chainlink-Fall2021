pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/ownership/Ownable.sol";

contract FundOperator {

    // make one giant struct to save on storage fees
    struct Token {
        string name;
        address token;
    }

    struct Asset {
        Token token;
        uint256 weighting; // a number from 1 to 100
    }
    
    mapping (uint256 => Asset) public isOperator;

    constructor() {
    }
}
