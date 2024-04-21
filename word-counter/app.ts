#! /user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt({
    name:"sentence",
    type:"input",
    message:"Enter Your Paragraph :"
})

let words = answer.sentence.trim().split(" ");

    console.log(`\n ${answer.sentence}`)
console.log(chalk.greenBright(`\n\t Your Paragraph Contains ${words.length} Words.`))