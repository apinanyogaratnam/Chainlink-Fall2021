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
    
    mapping (uint256 => Asset) public Assets;

    constructor() {
    }

    function checkIfTokenExists(address _token) public view returns (bool) {
        for (uint256 i = 0; i < Assets.length; i++) {
            if (Assets[i].token.token == _token) {
                return true;
            }
        }

        return false;
    }

    function addAsset(string _name, address _token, uint256 _weighting) public onlyOwner {
        require(_weighting > 0 && _weighting <= 100, "Weighting must be between 1 and 100");
        require(!checkIfTokenExists(_token), "Token already exists");

        Asset asset = Asset({
            token: Token({
                name: _name,
                token: _token
            }),
            weighting: _weighting
        });

        Assets[Assets.length] = asset;
    }
}
