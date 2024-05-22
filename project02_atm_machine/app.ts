#! /usr/bin/env  node 

import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance: number = 10000;
let myPin: number = 1111;

const pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "\n Enter Your PIN : ",
    type: "number",
  },
]);
///////////////////// CHECKIN THE PIN /////////////////////
if (myPin === pinAnswer.pin) {
  console.log(`\n Your balance is : ${myBalance}`);

  const operations = await inquirer.prompt([
    {
      name: "Choice",
      message: "\n What do you want to do?",
      type: "list",
      choices: ["withdraw", "deposit", "checkBalance","fastcash"],
    },
  ]);

///////////////////// WITHDRAW AMOUNT/////////////////////

  if (operations.Choice == "withdraw") {
    const money = await inquirer.prompt([
      {
        name: "amount",
        message: "\n Enter your Amount : ",
        type: "number",
      },
    ]);
/////// IF AMOUNT ENTERED IS GREATER THAN THE BALANCE///////

    if(money.amount > myBalance){
      console.log("You Don't have enough balance to withdraw!")
    }
    else
    {
    console.log(`\n You have withdrawn : ${money.amount}`);
    myBalance -= money.amount;
    console.log(`\n Your Remaining Balance is : ${myBalance} `);
  }
}
  ///////////////////// FAST CASH /////////////////////

  if(operations.Choice == "fastcash"){
    const fastcash = await inquirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message: "\n Choose Amount you want to withdraw",
        choices: ["2000","4000","5000","8000","10000",]
      },
  
    ])
  
    console.log(`\n You have withdrawn ${fastcash.fastCash}`)
    myBalance -= fastcash.fastCash; 
    console.log(`\n Your Remaining Balance is ${myBalance}`)
  }

///////////////////// DESPOSITED AMOUNT/////////////////////

  else if (operations.Choice == "deposit") {
    const depositAmount = await inquirer.prompt([
      {
        name: "deposited",
        message: "\n Enter your Amount : ",
        type: "number",
      },
    ]);
    console.log(`\n You have deposited : ${depositAmount.deposited}`);

    myBalance += depositAmount.deposited;

    console.log(`\n Your Remaining Balance is : ${myBalance} `);
  }

  ///////////////////// CHECKING BALANCE/////////////////////

  else if (operations.Choice == "checkBalance") {
    console.log(`Your Balance is ${myBalance}`);
  }
} else {
  console.log("\n Wrong Pin Code!!!");
}