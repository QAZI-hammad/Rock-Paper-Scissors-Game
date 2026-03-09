let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
 
const drawGame = () => {
    msg.innerText = "Game was Draw!, Play Again!";
        msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Wins! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScore.innerText = compScore;
        
        msg.innerText = `You Lose! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors beats paper, paper beats rock
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock beats scissors, scissors beats paper
          userWin = compChoice === "scissors" ? false : true;
    } else {
        //paper beats rock, rock beats scissors
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice= choice.getAttribute('id');
        playGame(userChoice);
    });
});