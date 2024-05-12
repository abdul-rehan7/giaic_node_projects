import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const ans = await inquirer.prompt({
  name: "startingTime",
  type: "input",
  message: "Enter Your Starting time (in seconds)",
});

function startTime(val:number){
    setInterval((()=>{}),1000)
}

const inTime = new Date().setSeconds(new Date().getSeconds() + 1)
console.log(inTime)