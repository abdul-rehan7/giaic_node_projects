import inquirer from "inquirer";
import chalk from "chalk";

let player = {
  health: 100,
};

let enemy = {
  health: 100,
};
function recover() {
  return (player.health = 100);
}

// =================================== WHILE CONDITION ====================================
while (player.health > 0) {
  let ask = await inquirer.prompt({
    name: "Q1",
    message: "Which opponent Do You want to Fight?",
    type: "list",
    choices: ["Skeleton", "Alien", "Robot"],
  });

  //  ======================================= OPPONENTS =======================================

  if (ask.Q1 == "Skeleton") {
    console.log("\nYou Selected to Fight with Skeleton");
    player.health -= 20;
    console.log(chalk.yellow("\t AWWWW! You got a Damage of -20"));
    player.health = Math.max(0, player.health);
    console.log(`\nYour player health is ${chalk.greenBright(player.health)}`);
  } else if (ask.Q1 == "Alien") {
    console.log("\nYou Selected to Fight with Alien");
    player.health -= 50;
    console.log(chalk.yellow("\t AWWWW! You got a Damage of -50"));
    player.health = Math.max(0, player.health);
    console.log(`\nYour player health is ${chalk.greenBright(player.health)}`);
  } else if (ask.Q1 == "Robot") {
    console.log("\nYou Selected to Fight with Robot");
    player.health -= 70;
    console.log(chalk.yellow("\t AWWWW! You got a Damage of -70"));
    player.health = Math.max(0, player.health);
    console.log(`\nYour player health is ${chalk.greenBright(player.health)}`);
  }

  let secQ = await inquirer.prompt({
    name: "Q2",
    type: "list",
    message: "What do you want to do?",
    choices: ["Attack", "Recover"],
  });
  // ===================================== RECOVER ====================================
  {
    if (secQ.Q2 = "Recover"){
      recover();
      console.log("\nYou Choosed to Recover! ");
      console.log(`Your Health is Now ${chalk.greenBright(player.health)}`);
    } 
    else if(secQ.Q2 = "Attack"){
      console.log("\nYou Choosed to Attack! ");
      enemy.health -= 50;
      console.log(
        `Your Enemy's Health is Now ${chalk.greenBright(enemy.health)}`
      );
    }
    else{
        console.log("Wrong Command!")
    }
  }
}

// ===================================== GAME OVER ====================================
console.log(chalk.red("\n \t GAME OVER !!!"));
