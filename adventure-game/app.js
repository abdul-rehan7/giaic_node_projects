import inquirer from "inquirer";
let player = {
    health: 100,
};
// =================================== WHILE CONDITION ====================================
while (player.health > 0) {
    let ask = await inquirer.prompt({
        name: "Q1",
        message: "Which opponent Do You want to Fight?",
        type: "list",
        choices: ["Skeleton", "Alien", "Robot"]
    });
    //  ======================================= OPPONENTS =======================================
    if (ask.Q1 == "Skeleton") {
        console.log("You Selected to Fight with Skeleton");
        console.log(`Your player health is ${player.health = player.health - 20}`);
    }
    else if (ask.Q1 == "Alien") {
        console.log("You Selected to Fight with Alien");
        console.log(`Your player health is ${player.health = player.health - 50}`);
    }
    else if (ask.Q1 == "Robot") {
        console.log("You Selected to Fight with Robot");
        console.log(`Your player health is ${player.health = player.health - 70}`);
    }
    else {
        console.log("No Opponent Selected");
    }
}
console.log("GAME OVER !!!");
