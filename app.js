let userScore = 0;
let compScore = 0;

const boxs = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const gencompchoice = () => {
    //rock ,paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = `You lose  ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const drowGame = () => {
    console.log("game was drow!");
    msg.innerText = "game was drow Try again";
    msg.style.backgroundColor = "blue";
}
const playGame = (userchoice) => {
    console.log("user Choice =", userchoice);
    //Generate Computer Choice
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);
    if (userchoice === compchoice) {
        //drow game
        drowGame();

    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissors,paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock,scissors
            userWin = compchoice === "scissors" ? false : true;
        } else {
            //rock ,paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        playGame(userChoice);

    });
});

