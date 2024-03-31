#! /usr/bin/env node 


import inquirer from "inquirer";
import chalk from "chalk"
import { todo } from "node:test";

let todos = [];
let condition = true;

//////////////// ADDING TODO'S ////////////////

while (condition) {
  let addtodo = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: chalk.black.white("\t What do you want to add to your todo's : "),
    },

    {
      name: "addmore",
      type: "confirm",
      default: "false",
      message: chalk.cyan("\n Do you want to add more todo's? "),
    },
  ]);
 
  todos.push(addtodo.todo)
  condition = addtodo.addmore;

  console.log(chalk.blueBright.underline("\n Your ToDo List :"))
  todos.forEach(todo => {
    console.log(chalk.green(`\t \u2022 ${todo}`));
  });
    
    
}