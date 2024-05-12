import inquirer from "inquirer";
const ans = await inquirer.prompt({
    name: "startingTime",
    type: "input",
    message: "Enter Your Starting time (in seconds)",
});
let value = ans.startingTime;
console.log(value);
