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

    function checkIfTokenExists(address token) public view returns (bool) {
        for (uint256 i = 0; i < isOperator.length; i++) {
            if (isOperator[i].token.token == token) {
                return true;
            }
        }

        return false;
    }
    

    // function addAsset(address token, string name, uint256 weighting) public onlyOwner{
    //     require(weighting > 0 && weighting <= 100);
    //     require(isOperator[token] == 0);
    //     isOperator[token] = Asset(Token(name, token), weighting);
    // }
}
