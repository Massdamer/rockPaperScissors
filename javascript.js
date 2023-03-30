const items = ["rock","paper","scissors"];
let length = items.length;
function getComputerChoice(){
    let a = Math.random();
    //console.log(a);
    //console.log(a*(length));
    return items[Math.floor(a*(length))];
}
let choice = getComputerChoice();
//console.log(choice);

//take a player input;
//take a computer input;
//write a function with these two parameters
function gameRound(){
    let playerSelection=prompt("write your choice");
    console.log("player selection: "+playerSelection);
    let computerSelection = getComputerChoice();
    console.log("computer selection: " +computerSelection);
    let outcome;
    if(playerSelection.toLowerCase()==="rock"){
        if(computerSelection==="rock"){
            console.log("It's a draw!")
            return outcome="draw";
        }
        else if(computerSelection==="paper"){
            console.log("You lose!")
            return outcome="lose";
        }
        else {
            console.log("You win!")
            return outcome="win";
        }

    }
    else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection==="rock"){
            console.log("You win!")
            return outcome="win";
        }
        else if(computerSelection==="paper"){
            console.log("It's a draw!")
            return outcome="draw";
        }
        else {
            console.log("You lose!")
            return outcome="lose";
        }
    }
    else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection==="rock"){
            console.log("You lose!")
            return outcome="lose";
        }
        else if(computerSelection==="paper"){
            console.log("You win!")
            return outcome="win";
        }
        else {
            console.log("It's a draw!")
            return outcome="draw";
        }
    }
    else{
        return alert("Please input a \"rock\", a \"paper\" or \"scissors\"")
    }
    
}
//gameRound();

function game(){
    let playerScore=0;
    let computerScore=0;
    let scoreText;
    for(i=0; i<=4; i++){
        
        let x = gameRound();
        if(x==="win"){
            playerScore++;
        }
        else if(x==="lose"){
            computerScore++;
        }
        else{

        }
        scoreText="It's " + playerScore +":"+computerScore;
        console.log(scoreText);
    }
    if(playerScore>computerScore){
        console.log("You win!");
    }
    else if (playerScore<computerScore){
        console.log("You lose");
    }
    else console.log("It is a draw!");
    return ;
}
game();