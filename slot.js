// Deposit
//determine number of lines to bet on
//collect a bet amount
//spin slot machine
//check result
//give money
//play again

const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numDepositAmount = parseFloat(depositAmount);

        if(isNaN(numDepositAmount)|| numDepositAmount<= 0){
        console.log("Invalid deposit amount, try again."); 
        }else{
            return numDepositAmount;
        }
    }
};
deposit();