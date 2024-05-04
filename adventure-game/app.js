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
        console.log("\n You Selected to Fight with Skeleton");
        player.health -= 20;
        console.log(chalk.yellow("\t Oh No! You got a Damage of -20"));
        player.health = Math.max(0, player.health);
        console.log(`\n Your Health: ${chalk.greenBright(player.health)} \n Enemy Health: ${chalk.greenBright(enemy.health)}`);
    }
    else if (ask.Q1 == "Alien") {
        console.log("\n You Selected to Fight with Alien");
        player.health -= 50;
        console.log(chalk.yellow("\t Oh No! You got a Damage of -50"));
        player.health = Math.max(0, player.health);
        console.log(`\n Your Health: ${chalk.greenBright(player.health)} \n Enemy Health: ${chalk.greenBright(enemy.health)}`);
    }
    else if (ask.Q1 == "Robot") {
        console.log("\n You Selected to Fight with Robot");
        player.health -= 70;
        console.log(chalk.yellow("\t Oh No! You got a Damage of -70"));
        player.health = Math.max(0, player.health);
        console.log(`\n Your Health: ${chalk.greenBright(player.health)} \n Enemy Health: ${chalk.greenBright(enemy.health)}`);
    }
    if (player.health <= 0) {
        console.log(" Your Health is 0 and You Loose the Game!");
        process.exit();
    }
    let secQ = await inquirer.prompt({
        name: "Q2",
        type: "list",
        message: "What do you want to do?",
        choices: ["Attack", "Recover"],
    });
    // ===================================== RECOVER ====================================
    {
        if (secQ.Q2 == "Recover") {
            recover();
            console.log("\n You Choosed to Recover! ");
            console.log(` Your Health: ${chalk.greenBright(player.health)} \n Enemy Health: ${chalk.greenBright(enemy.health)}`);
        }
        // ===================================== ATTACK ====================================
        else if (secQ.Q2 == "Attack") {
            console.log("\n You Choosed to Attack! ");
            enemy.health -= 40;
            enemy.health = Math.max(0, enemy.health);
            console.log(` Your Health: ${chalk.greenBright(player.health)} \n Enemy Health: ${chalk.greenBright(enemy.health)}`);
            while (enemy.health <= 0) {
                console.log(chalk.rgb(198, 91, 207)(" Your Enemy Die and You won the Game :) "));
                process.exit();
            }
        }
        else {
            console.log("Wrong Command!");
        }
    }
}
// ===================================== GAME OVER ====================================
console.log(chalk.red("\n \t GAME OVER !!!"));
