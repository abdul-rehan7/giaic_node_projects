#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
let i = 1;
let j = 0;
while (condition) {
    //  ----------------------------------- Choices -----------------------------------
    let Options = await inquirer.prompt([
        {
            name: "item",
            type: "list",
            message: "Choose an Operation",
            choices: ["Add", "Remove", "Print"],
        },
    ]);
    //  --------------------------------------- ADD ---------------------------------------
    if (Options.item === "Add") {
        const newItem = await inquirer.prompt([
            {
                name: "toAdd",
                type: "input",
                message: "Enter What you want to add : ",
            },
        ]);
        todolist.push(newItem.toAdd);
    }
    //  ------------------------------------- Remove -------------------------------------
    else if (Options.item === "Remove") {
        let toRemove = await inquirer.prompt([
            {
                name: "index",
                type: "input",
                message: "Enter the index of item to Remove : ",
            },
        ]);
        const Remove = parseInt(toRemove.index);
        todolist.splice(Remove - 1, 1);
    }
    //  ------------------------------- Final Result Printing ------------------------------
    else if (Options.item === "Print") {
        condition = false;
    }
}
console.log(chalk.underline.green("\n Your TodoList is :"));
todolist.forEach((todo) => {
    console.log(` ${i}. ${todolist[j]}`);
    i++;
    j++;
});
