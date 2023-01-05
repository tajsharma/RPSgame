function match(compChoice, userChoice){

}

function computer(){
    let listofOptions = ['Rock','Paper', 'Scissors']
    let random = Math.random(2)
    return listofOptions[random]
}

let name = computer()
console.log(name)