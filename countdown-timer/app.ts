#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// Creating a main function
async function App() {
  let req = await inquirer.prompt({
    // Asking seconds from user
    name: "q1",
    type: "input",
    message: "Enter time in seconds",
  });

  let seconds = req.q1;
  // getting time after adding user seconds into current seconds
  let endTime = new Date().getTime() + seconds * 1000;

  const displayTimeRemaining = () => {
    let now = new Date().getTime();
    // Time after subracting current time from future time
    let remainingTime = endTime - now;

    if (remainingTime > 0) {
      // Print Remaining time after converting millisec to sec
      let secLeft = Math.ceil(remainingTime / 1000);
      console.clear();
      console.log(
        chalk.blueBright(
          `\n\n\t The Time Remaining is ${chalk.greenBright(secLeft)} seconds`
        )
      );
      // Repeating the function after (1000 ms = 1 sec)
      setTimeout(displayTimeRemaining, 1000);
    } else {
      console.clear();
      console.log(chalk.red(`\n\n\t - - - - COUNTDOWN IS COMPLETE - - - - `));
      Restart();
    }
  };
  displayTimeRemaining();
}

async function Restart() {
  let again = await inquirer.prompt({
    // Asking seconds from user Again
    name: "reply",
    type: "list",
    choices: ["Yes", "No"],
    message: "Do you want to Run the Timer Again?",
  });
  if (again.reply == "Yes") {
    App();
  } else {
    console.log(
      chalk.green(
        "\n\t Thanks For Using Our Countdown Timer Have a Nice Day :)"
      )
    );
  }
}
App();
