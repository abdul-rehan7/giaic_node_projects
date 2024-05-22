#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { todo } from "node:test";

let todos:string[] = [];
let condition = true;
let i = 1;
let j = 0;

//////////////// ADDING TODO'S ////////////////

while (condition) {
  let addtodo = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: chalk.black.white(
        "\t What do you want to add to your todo's : "
      ),
    },

    {
      name: "addmore",
      type: "confirm",
      default: "false",
      message: chalk.cyan("Do you want to add more todo's? "),
    },
  ]);

  todos.push(addtodo.todo);
  condition = addtodo.addmore;
}
console.log(chalk.blueBright.underline("\n Your Todo List :"));
todos.forEach((todo) => {
  console.log(chalk.green(`\t ${i}. ${todos[j]}`));
  i++;
  j++;
});
