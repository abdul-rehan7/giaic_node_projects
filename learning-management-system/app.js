import inquirer from "inquirer";
let info = await inquirer.prompt([
    {
        name: "studentName",
        type: "input",
        message: "Enter the name of Student: "
    },
    {
        name: "courses",
        type: "input",
        message: "Enter Course Which you want to enroll: "
    }
]);
let student = {
    name: [info.studentName],
    rollNumber: Math.floor(10000 + Math.random() * 10000),
    courses: [info.courses],
    Balance: 1000,
    status: "UNPAID"
};
console.log(`\t Name : ${student.name}`);
console.log(`\t Roll Number : ${student.rollNumber}`);
console.log(`\t Courses : ${student.courses}`);
console.log(`\t Balance : ${student.Balance}`);
console.log(`\t Status : ${student.status}`);
if (status === "UNPAID") {
    console.log("\t Your Fee is UNPAID!");
    inquirer.prompt({
        name: "paying",
        type: "input",
        message: , "Enter the Amount to Pay": 
    });
}
