#! /usr/bin/evn node

import inquirer from "inquirer";

//console.log("Welcome to  yoush - CLI NumberGuessing Game");

//1) computer will generate a rendom number 

//2)user input for guessing number

//3)compare user input with computer generated number and show result


let randomNumber =  Math.floor(Math.random() * 5 + 1);

let guessnumbers = await inquirer.prompt([

{

          name: "userGuessNumber",
          type: "number",
          message: "Please guess a number(please guess a random num between 1 to 5):",
}

]);

console.log(randomNumber);

if(guessnumbers.userGuessNumber ===  randomNumber){
    console.log("Congratulation ! you guess a correct number");
}
else{
    console.log("Sorry , you guess a wrong number")
}