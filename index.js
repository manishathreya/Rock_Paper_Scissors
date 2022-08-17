let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const userRes_div = document.getElementById("resUser");
const compRes_div = document.getElementById("resComp");
const move_div = document.getElementsByClassName("move");
const once_div = document.getElementById("once");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function converToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";  
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = converToWord(userChoice)+ " beats " + converToWord(computerChoice) + " You win!'🔥";
    userRes_div.setAttribute("src",`${converToWord(userChoice)}.png`);
    compRes_div.setAttribute("src",`${converToWord(computerChoice)}.png`);
    once_div.style.display = block
}

function lose(userChoice,computerChoice){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = converToWord(computerChoice)+ " beats " + converToWord(userChoice) + " You lose!💔";
    userRes_div.setAttribute("src",`${converToWord(userChoice)}.png`);
    compRes_div.setAttribute("src",`${converToWord(computerChoice)}.png`);
    once_div.style.display = block
}

function draw(userChoice,computerChoice){
    result_div.innerHTML = converToWord(computerChoice)+ " and " + converToWord(userChoice) + " Its a Draw!🤜🤛";
    userRes_div.setAttribute("src",`${converToWord(userChoice)}.png`);
    compRes_div.setAttribute("src",`${converToWord(computerChoice)}.png`);
    once_div.style.display = block
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
        once_div.style.visibility = visible;
    })
    
    paper_div.addEventListener('click',function(){
        game("p");
        once_div.style.visibility = visible;
    })
    
    scissor_div.addEventListener('click',function(){
        game("s");
        
    })
}

main();
