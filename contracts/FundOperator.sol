pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract FundOperator is Ownable {

    struct Token {
        address token;
        uint8 weighting;
    }
    
    mapping (uint8 => Token) public tokens;

    constructor() {
    }

    function checkIfTokenExists(address _token) public view returns (bool) {
        for (uint8 i = 0; i < tokens.length; i++) {
            if (tokens[i].token == _token) {
                return true;
            }
        }

        return false;
    }

    function addAsset(address _token, uint8 _weighting) public onlyOwner {
        require(!checkIfTokenExists(_token), "Token already exists");
        require(_weighting >= 0 && _weighting <= 100, "Weighting must be between 0 and 100");

        tokens[tokens.length] = Token(_token, _weighting);
    }   
}
