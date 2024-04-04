#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todolist:string[] = [];
let condition = true;
let i =1;
let j=0;

while (condition) {
  let questionTodos = await inquirer.prompt([
    {
      name: "q1",
      type: "input",
      message: "\n What do you want to add to your Todo List?",
    },
    {
      name: "q2",
      type: "confirm",
      message: "Do you want to add more?",
    },
  ]);

  todolist.push(questionTodos.q1);
  condition = questionTodos.q2;
}

console.log(chalk.red.underline("\n This is your Todo List :"))
todolist.forEach(element => {
  console.log( chalk.green(`${i}. ${todolist[j]}`));
   i++;
   j++;
});  