#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let score = 0;
const quiz: {
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  Q5: string;
} = await inquirer.prompt([
  {
    name: "Q1",
    type: "list",
    message: "\nWhat is the primary purpose of TypeScript?",
    choices: [
      "a. To add static typing to JavaScript",
      "b. To improve the performance of JavaScript",
      "c. To replace JavaScript with a new language",
    ],
  },
  {
    name: "Q2",
    type: "list",
    message: "Which of the following is a key feature of TypeScript?",
    choices: [
      "a. Dynamic typing",
      "b. Optional static typing",
      "c. Mandatory static typing",
    ],
  },
  {
    name: "Q3",
    type: "list",
    message: "What is the file extension for TypeScript files?",
    choices: ["a. .js", "b. .ts", "c. .jsx"],
  },
  {
    name: "Q4",
    type: "list",
    message: 'What is the purpose of the "any" type in TypeScript?',
    choices: [
      "a. To specify a type for a variable",
      "b. To indicate that a variable can hold any type of value",
      "c. To indicate that a variable is null or undefined",
    ],
  },
  {
    name: "Q5",
    type: "list",
    message: 'What is the purpose of the "interface" keyword in TypeScript?',
    choices: [
      "a. To define a new class",
      "b. To define a new function",
      "c. To define a contract for a object shape",
    ],
  },
]);

switch (quiz.Q1) {
  case "a. To add static typing to JavaScript":
    console.log(chalk.green("\n1. Correct"));
    ++score;
    break;
  default:
    console.log(chalk.red("\n1. Incorrect"));
}

switch (quiz.Q2) {
  case "b. Optional static typing":
    console.log(chalk.green("2. Correct"));
    ++score;
    break;
  default:
    console.log(chalk.red("2. Incorrect"));
}
switch (quiz.Q3) {
  case "b. .ts":
    console.log(chalk.green("3. Correct"));
    ++score;
    break;
  default:
    console.log(chalk.red("3. Incorrect"));
}
switch (quiz.Q4) {
  case "b. To indicate that a variable can hold any type of value":
    console.log(chalk.green("4. Correct"));
    ++score;
    break;
  default:
    console.log(chalk.red("4. Incorrect"));
}
switch (quiz.Q5) {
  case "c. To define a contract for a object shape":
    console.log(chalk.green("5. Correct"));
    ++score;
    break;
  default:
    console.log(chalk.red("5. Incorrect"));
}

console.log(`\n\t Your Score is : ${score}`);
