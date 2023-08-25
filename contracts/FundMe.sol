
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


contract FundMe{

     address payable  private owner;
     mapping (address=>uint256) private donations;
     uint256 private donetion_count;

     event Doneted(address sender,uint256 amount);
     event Withdrawed(uint256 timestamp);

     AggregatorV3Interface internal pricefeed;
     
     

     constructor(address pricefeedAddress){
         owner=payable(msg.sender); 
         donetion_count=0;
          pricefeed=AggregatorV3Interface(
             pricefeedAddress
         );
     }

     function donate() external payable  {

         donations[msg.sender]+=msg.value;
         emit Doneted(msg.sender, msg.value);
         donetion_count++;

     }

     modifier onlyOwner{

         require(payable(msg.sender)==owner,"You are not the owner");
         _;
     }

     function withdraw() external payable onlyOwner{
         owner.transfer(address(this).balance);
     }

     function donetionCount() public view returns(uint256){
         return donetion_count;
     }

     function getDonetions(address from) external view returns(uint256){
         return donations[from];
     }

     function viewOwner() external view returns(address o){
         o=owner;
     }

     function getEthtoUSD() public view returns(int256){
          (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = pricefeed.latestRoundData();
        int256 currentPriceinusd=answer/100000000;
        return currentPriceinusd;
     }
}