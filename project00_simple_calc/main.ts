#! /usr/bin/env  node 



import inquirer from "inquirer";


const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select an Operator",
    type: "list",
    name: "operator",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);
 
if ((answer.operator === "Add")) {
  console.log(
    `\n Your Answer is: ${answer.firstNumber + answer.secondNumber}` 
  );
}
else if  ((answer.operator === "Subtract")) {
  console.log(
    `\n Your Answer is: ${answer.firstNumber - answer.secondNumber}` 
  );
}
else if ((answer.operator === "Multiply")) {
  console.log(
    `\n Your Answer is: ${answer.firstNumber * answer.secondNumber}` 
  );
}
else if ((answer.operator === "Divide")) {
  console.log(
    `\n Your Answer is: ${answer.firstNumber/answer.secondNumber}` 
  );
}
else{
  console.log("Please Select a Valid Operator!")
}
