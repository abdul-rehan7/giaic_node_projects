#! /usr/bin/env node 

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "guessedNumber",
    type: "number",
    message: "Guess a Number:",
  },
]);

if (answers.guessedNumber === randomNumber) {
  console.log("You Guessed the correct Number :)");
} else {
  console.log("You Guessed the wrong number!!!");
}
