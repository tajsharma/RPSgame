function match(compChoice, userChoice){
    let winner = "Tie"
    while(userChoice != 'rock' && userChoice!= 'paper' && userChoice != 'scissors'){
        userChoice = prompt("Please only choose from: Rock, Paper or Scissors ");
    }
    console.log("finally man")
}

let listofOptions = ['Rock','Paper', 'Scissors'];

function computer(){
    let random = Math.floor(Math.random() * 3); // returns either 0,1, or 2
    return listofOptions[random];
};

let compChoice = computer().toLowerCase();
var playerChoice = prompt("Rock, Paper or Scissors? What do u pick!: ");


console.log(match(compChoice,playerChoice.toLowerCase()));

