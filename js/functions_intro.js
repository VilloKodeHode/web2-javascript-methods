function bob() {
    return "jamaican me crazy"
}

console.log(bob())

const bob2 = "jamaican me crazy"

console.log(bob2)

const marley = () => {
    return "Jaaaa man!"
}

console.log(marley())


let num1 = 15
let num2 = 23

// enkel funksjon som plusser tall sammen
function add() {
    // dette er det som kommer tilbake når man kaller på funksjonen:
    return num1 + num2
}

// Her kaller man på (invokes/calls) funksjonen add:
add()

// for å se svaret i konsollen:
console.log(add())


function multiply() {
    return num1 * num2
}

multiply()

console.log(multiply())

const arrowMultiply = () => num1 * num2
console.log(arrowMultiply())

//! Parametere:

//! Ikke skriv console.log inne i en funksjon!
// function hils(navn) {
//     console.log("Hello" + " " + navn)
// }

// hils("alle sammen. Ja hete mister")


function hils(navn) {
    return "Hello" + " " + navn
}

console.log(hils("alle sammen. Ja hete mister Melk!"))


const arrowAdd =(num1, num2) => num1 * num2

console.log(arrowAdd(1321,431))
console.log(arrowAdd(11,41))

const arrowADivide =(num1, num2) => num1 / num2

const answer = arrowADivide(358,3)

console.log(answer)
// for å ta bort desimaltall og fortsatt la det være Number datatype (float)
console.log(parseFloat(answer.toFixed(1)))


function throw1D10Dice() {
    return Math.ceil(Math.random() *10)
}

console.log(throw1D10Dice())

function throw1D9Dice() {
    return Math.floor(Math.random() *9 + 1)
}

console.log(throw1D9Dice())



function findRandomArrayIndex() {
    return Math.round(Math.random() * 2)
}

console.log(findRandomArrayIndex())

const colors = ["red", "blue", "green"]

function findRandomColor(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

console.log(findRandomColor(colors))


function giveCompliment() {
    const compliments = [
        "Du er fantastisk!",
        "Du er en stjerne!",
        "Du gjør verden lysere!",
        "Du er en superhelt!",
        "Du er den beste!",
    ]
    const randomIndex = Math.floor(Math.random()* compliments.length)
    const kompliment = compliments[randomIndex]
    return kompliment
}

console.log(giveCompliment())

