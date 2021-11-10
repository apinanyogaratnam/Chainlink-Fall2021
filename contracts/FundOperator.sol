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

// fix function so it compiles
    function getLengthOfMapping() public view returns (uint8) {
        uint8 count = 0;
        while (true) {
            if (tokens[count].token != address(0)) {
                count++;
            } else {
                break;
            }
        }

        return count;
    }

    function checkIfTokenExists(address _token) public view returns (bool) {
        for (uint8 i = 0; i < getLengthOfMapping(); i++) {
            if (tokens[i].token == _token) {
                return true;
            }
        }

        return false;
    }

    function addAsset(address _token, uint8 _weighting) public onlyOwner {
        require(!checkIfTokenExists(_token), "Token already exists");
        require(_weighting >= 0 && _weighting <= 100, "Weighting must be between 0 and 100");

        tokens[getLengthOfMapping()] = Token(_token, _weighting);
    }   
}
