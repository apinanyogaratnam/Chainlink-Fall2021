// SPDX-License-Identifier: UNLICENSED
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

    function removeAsset(address _token) public onlyOwner {
        require(checkIfTokenExists(_token), "Token does not exist");

        uint8 index = 0;
        while (true) {
            if (tokens[index].token == _token) {
                break;
            } else {
                index++;
            }
        }

        for (uint8 i = index; i < getLengthOfMapping() - 1; i++) {
            tokens[i] = tokens[i + 1];
        }

        tokens[getLengthOfMapping() - 1] = Token(address(0), 0);
    }

    function buy(address _token, uint256 _amount) public payable {
        require(checkIfTokenExists(_token), "Token does not exist");
        require(_amount > 0, "Amount must be greater than 0");
        require(msg.value == )

        uint8 index = 0;
        while (true) {
            if (tokens[index].token == _token) {
                break;
            } else {
                index++;
            }
        }

        uint256 amount = _amount * tokens[index].weighting / 100;
        //FIXME: This is not the correct way to do this
        _token.transfer(msg.sender, amount);

        // msg.sender.transfer(msg.value - amount);
    }
}
