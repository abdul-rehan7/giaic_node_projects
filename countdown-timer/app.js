// const ans = await inquirer.prompt({
//   name: "startingTime",
//   type: "input",
//   message: "Enter Your Starting time (in seconds)",
// });
function startTime(val) {
    setInterval((() => { }), 1000);
}
const inTime = new Date().setSeconds(new Date().getSeconds() + 1);
const intervalTime = new Date(inTime);
console.log(intervalTime);
export {};
