let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randonIdx = Math.floor(Math.random() * 3);
    return options[randonIdx];
};

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    //Generate Computer Choice -> Modular
    const compchoice =  genComputerChoice();
    console.log("Comp Choice = ", compchoice)
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("choce was click", userChoice);
        playGame(userChoice);
    });
});