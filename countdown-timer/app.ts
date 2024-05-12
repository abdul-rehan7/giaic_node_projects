import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const ans = await inquirer.prompt({
  name: "startingTime",
  type: "input",
  message: "Enter Your Starting time (in seconds)",
});

let value = ans.startingTime;
console.log(value)