let gameCount = 0; // Global variable to keep track of the number of games played
let userScore = 0;
let compScore = 0;

function playMatch(userChoice) {
    // Check if the game count is less than 10
    if (gameCount < 10) {
        let winner = match(userChoice);

        if (winner == 'User'){
            userScore++
        }else if(winner=='Computer'){
            compScore++
        }
            
        // Create a new paragraph element to hold the result
        let resultParagraph = document.createElement('p');
        // Set the text content of the paragraph to the result
        resultParagraph.textContent = winner + " wins!";
        // Append the new paragraph to the container
        document.querySelector('#resultText').appendChild(resultParagraph);
        // Increment the game count
        gameCount++;
    } else {
        // If the game count reaches 10, alert the user
        let finalWinner = whoWon(userScore,compScore)
        document.querySelector('#finalResults').innerText = finalWinner + " is the winner!"
        alert("You have played 10 games already!");
        console.log(userScore, compScore)
    }
}

function whoWon(userScore,compScore){
    if(userScore > compScore){
        return "User"
    }else if(userScore < compScore){
        return "Computer"
    }else{
        return "No one"
    }
}

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
        winner = "No one";
    }
    return winner
}

let listofOptions = ['Rock','Paper', 'Scissors'];

function computer(){
    let random = Math.floor(Math.random() * 3); // returns either 0,1, or 2
    return listofOptions[random];
};

//var playerChoice = prompt("Rock, Paper or Scissors? What do u pick!: ");


