function match(compChoice, userChoice){
    let winner = "No one"
    while(userChoice != 'rock' && userChoice!= 'paper' && userChoice != 'scissors'){
        userChoice = prompt("Please only choose from: Rock, Paper or Scissors ");
    }
    
    if(compChoice=='rock' && userChoice=='paper'){
        winner = 'User';
    }else if(compChoice=='rock' && userChoice=='scissors'){
        winner = 'Computer';
    }else if(compChoice=='paper' && userChoice=='scissors'){
        winner = 'User';
    }else if(compChoice=='paper' && userChoice=='rock'){
        winner = 'Computer';
    }else if(compChoice=='scissors' && userChoice=='paper'){
        winner = 'Computer';
    }else if(compChoice=='scissors' && userChoice=='rock'){
        winner = 'User';
    }else{
        return winner 
    }

    return winner
}

let listofOptions = ['Rock','Paper', 'Scissors'];

function computer(){
    let random = Math.floor(Math.random() * 3); // returns either 0,1, or 2
    return listofOptions[random];
};

let compChoice = computer().toLowerCase();
var playerChoice = prompt("Rock, Paper or Scissors? What do u pick!: ");

winner = match(compChoice,playerChoice.toLowerCase())
console.log(winner," wins!")
console.log('User picked->',playerChoice,'Computer picked->',compChoice);

