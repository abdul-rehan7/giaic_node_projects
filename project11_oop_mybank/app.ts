#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

interface BankAccount {
  accNum: number;
  balance: number;
  withdraw(amount: number): void;
  deposit(amount: number): void;
  checkBalance(): void;
}
// ACCOUNT CLASS
class Account implements BankAccount {
  accNum: number;
  balance: number;
  constructor(Acc: number, Balance: number) {
    this.accNum = Acc;
    this.balance = Balance;
  }
  //   CASH WITHDRAW
  withdraw(amount: number): void {
    if (this.balance > amount) {
      this.balance -= amount;
      console.log(
        `You have withdrawn ${amount}$ and Remaining balance is ${this.balance}$`
      );
    } else {
      console.log("Insufficient Balance");
    }
  }
  //   CASH DEPOSIT
  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `You Deposited ${amount}$ and your Current balance is ${this.balance}$`
    );
  }
  //   CHECK BALANCE
  checkBalance(): void {
    console.log(`Your Available Balance is ${this.balance} `);
  }
}

// CUSTOMER CLASS
class Customer {
  Fname: string;
  Lname: string;
  gender: string;
  age: number;
  mobile: number;
  account: Account;

  constructor(
    firstName: string,
    lastName: string,
    Gender: string,
    Age: number,
    phone: number,
    acc: BankAccount
  ) {
    this.Fname = firstName;
    this.Lname = lastName;
    this.gender = Gender;
    this.age = Age;
    this.mobile = phone;
    this.account = acc;
  }
}
//  CREATE BANK ACCOUNT
const accounts: BankAccount[] = [
  new Account(1001, 500),
  new Account(1002, 1000),
  new Account(1003, 2000),
];

// CREATE CUSTOMERS

const customers: Customer[] = [
  new Customer("Abdul", "Rehan", "Male", 18, 4003002, accounts[0]),
  new Customer("Babar", "Azam", "Male", 28, 228134, accounts[1]),
  new Customer("Muhammad", "Rizwan", "Male", 38, 2342042, accounts[2]),
];

async function service() {
  do {
    const Input = await inquirer.prompt({
      name: "accountNumber",
      type: "input",
      message: "Enter Your Account Number",
    });
    const customer = customers.find(
      (customers) => customers.account.accNum === Number(Input.accountNumber)
    );
    if (customer) {
      console.log(
        `\n Welcome ${customer.Fname} ${customer.Lname} \n Your Current Balance is ${customer.account.balance}`
      );
      const ans = await inquirer.prompt({
        name: "ask",
        type: "list",
        choices: ["withdraw", "deposit", "checkbalance", "exit"],
        message: "What do you want to do?",
      });
      if (ans.ask === "withdraw") {
        const withdrawAmount = await inquirer.prompt({
          name: "amount",
          type: "number",
          message: "Enter The Amount to withdraw : ",
        });
        customer.account.balance -= withdrawAmount.amount;
        console.log(
          `Your Available balance is now ${customer.account.balance}`
        );
      } else if (ans.ask === "deposit") {
        const depositAmount = await inquirer.prompt({
          name: "amount",
          type: "number",
          message: "Enter The Amount to deposit : ",
        });
        customer.account.balance += depositAmount.amount;
        console.log(
          `Your Available balance is now ${customer.account.balance}`
        );
      } else if (ans.ask === "checkbalance") {
        console.log(`Your Available Balance is ${customer.account.balance}`);
      } else if (ans.ask === "exit") {
        setTimeout(() => {
          console.log("Exiting . . . ");
        }, 2000);

        setTimeout(() => {
          console.log("Thanks for using our Bank Services. Have a Nice Day😊");
        }, 4000);
        return;
      } else {
        console.log(chalk.redBright("\n\t No Account Found! \n "));
      }
    }
  } while (true);
}

service();
