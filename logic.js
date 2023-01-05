function match(compChoice, userChoice){
    let winner = "Tie"
    if(userChoice != 'rock' || userChoice!= 'paper' || userChoice != 'scissors'){
        userChoice = prompt("Rock, Paper or Scissors? What do u pick!: ");
    }else{
        console.log('Valid choice')
    }
}

let listofOptions = ['Rock','Paper', 'Scissors'];

function computer(){
    let random = Math.floor(Math.random() * 3); // returns either 0,1, or 2
    return listofOptions[random];
};

let compChoice = computer().toLowerCase();
var playerChoice = prompt("Rock, Paper or Scissors? What do u pick!: ");


console.log(match(compChoice,playerChoice.toLowerCase()));

