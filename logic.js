function match(compChoice, userChoice){

}

function computer(){
    let listofOptions = ['Rock','Paper', 'Scissors']
    let random = Math.floor(Math.random() * 3) // returns either 0,1, or 2
    return listofOptions[random]
}

let compChoice = computer().toLowerCase()
console.log(compChoice)

