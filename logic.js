function match(compChoice, userChoice){
    return compChoice, userChoice
}

function computer(){
    let listofOptions = ['Rock','Paper', 'Scissors']
    let random = Math.floor(Math.random() * 3) // returns either 0,1, or 2
    return listofOptions[random]
}

let compChoice = computer().toLowerCase()

let playerChoice = prompt("Rock, Paper or Scissors? What do u pick!: ")

console.log(match(compChoice,playerChoice))

