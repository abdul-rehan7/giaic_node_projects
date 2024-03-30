import inquirer from "inquirer";

let todos = [];
let condition = true;

//////////////// ADDING TODO'S ////////////////

while (condition) {
  let addtodo = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "\n What do you want to add to your todo's",
    },

    {
      name: "addmore",
      type: "confirm",
      default: "false",
      message: "\n Do you want to add more todo's",
    },
  ]);
  todos.push(addtodo.todo)
  condition = addtodo.addmore;
  console.log(todos);
}
