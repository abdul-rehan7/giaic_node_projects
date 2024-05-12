import inquirer from "inquirer";
const ans = await inquirer.prompt({
    name: "startingTime",
    type: "input",
    message: "Enter Your Starting time (in seconds)",
});
function startTime(val) {
    setInterval((() => { }), 1000);
}
const inTime = new Date().setSeconds(new Date().getSeconds() + 1);
console.log(inTime);
