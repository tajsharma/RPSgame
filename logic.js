function match(userChoice){

    let compChoice = computer().toLowerCase();

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
        console.log("Tie") 
    }

    console.log(winner," wins!")
    console.log('User picked->',userChoice,'Computer picked->',compChoice);
}

let listofOptions = ['Rock','Paper', 'Scissors'];

function computer(){
    let random = Math.floor(Math.random() * 3); // returns either 0,1, or 2
    return listofOptions[random];
};

//var playerChoice = prompt("Rock, Paper or Scissors? What do u pick!: ");


