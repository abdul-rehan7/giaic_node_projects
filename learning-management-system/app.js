#! usr/nin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// ------------------------TAKING STUDENT INFO--------------------------
let info = await inquirer.prompt([
    {
        name: "studentName",
        type: "input",
        message: chalk.underline.blue("\n Enter the name of Student:"),
    },
    {
        name: "courses",
        type: "input",
        message: chalk.underline.blue("\n Enter Course Which you want to enroll:"),
    },
]);
// ------------------------STUDENT DATA VARIABLE--------------------------
let student = {
    name: [info.studentName],
    rollNumber: Math.floor(10000 + Math.random() * 10000),
    courses: [info.courses],
    Balance: 100000,
    courseFee: 100000,
    feeStatus: 0,
};
// ------------------------PRINTING DATA--------------------------
console.log(`\t Name : ${student.name}`);
console.log(`\t Roll Number : ${student.rollNumber}`);
console.log(`\t Course : ${student.courses}`);
console.log(`\t Course Fee : ${student.courseFee}`);
console.log(`\t Balance : ${student.Balance}`);
console.log(`\t Fee Paid : Rs ${student.feeStatus}`);
// ------------------------FEE PAYMENT--------------------------
{
    if (student.feeStatus != 100000) {
        console.log(chalk.red("\t\t\t Your Fee is UNPAID!"));
        let pay = await inquirer.prompt({
            name: "paying",
            type: "number",
            message: chalk.underline.blue("\n Enter the Amount to Pay :"),
        });
        student.feeStatus += pay.paying;
        student.Balance -= pay.paying;
        console.log(`\t Fee Paid Rs ${student.feeStatus}`);
        console.log(`\t Your Current Balance is : ${student.Balance}`);
    }
}
// --------------------------- WHEN FEE IS PAID --------------------------
if ((student.feeStatus >= student.courseFee)) {
    console.log(chalk.greenBright('\t\tYour Fee is PAID and You can Join the Classes :)'));
}
// --------------------------- IF STILL UNPAID --------------------------
else {
    console.log(chalk.red('\t\tFEE IS NOT PAID!'));
    console.log(chalk.red("\tSorry! You Can't Join the Classes :("));
}
