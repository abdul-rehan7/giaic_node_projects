#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    PKR: 277,
    EUR: 0.92,
    INR: 83.3,
};
let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Choose From Currency : ",
        choices: ["USD", "INR", "EUR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: "Choose To Currency : ",
        choices: ["USD", "INR", "EUR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter The Amount To Convert :",
    },
]);
let fromCurrency = currency[answers.from];
let toCurrency = currency[answers.to];
let money = answers.amount;
let baseamount = money / fromCurrency;
let converted = baseamount * toCurrency;
console.log(chalk.red(`\n\t ${converted.toFixed(1)} `));
