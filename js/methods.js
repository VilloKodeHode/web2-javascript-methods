//! METODER:

//! String:

const url = "//http:localhost:3000"
let myString = "JavaScript er vanskelig"

console.log(myString)

console.log(myString.length)

// Ta ut en del av stringen ved hjelp av slice. Her tar jeg bort de 4 første bokstavene:
console.log(myString.slice(4))

// Tar ut en del av stringen ved hjelp av substring. Her tar jeg bort de 4 første bokstavene og tar med til og med tiende bokstav
console.log(myString.substring(4,10))


// Bytter ut en del av stringen med noe annet. Det første parameteret ("vanskelig"), byttes ut med det andre parameteret ("gøy"), hvis første parameter er true
console.log(myString.replace("vanskelig", "gøy"))

// Konverter strengen til små bokstaver
console.log(myString.toLowerCase())

// Konverter strengen til store bokstaver
console.log(myString.toUpperCase())

let userName = " Supersomeone   "
console.log(userName)
// Trim tar bort whitespace:
console.log(userName.trim())
// trimEnd() tar bort whitespace på slutten av en string
// trimStart() tar bort whitespace på starten av en string
// trim() tar bort whitespace på slutten og starten av en string

// Få tilgang til individuelle tegn i en streng. Her finner vi det første tegnet:
console.log(myString[0])
console.log(myString.charAt(0))

console.log(myString.split(""))

let someText = `In the vast expanse of the digital universe, where 0s and 1s dance in a binary ballet, there exists a realm of whimsy and wonder. Pixels pirouette across screens, crafting stories untold and dreams yet to be dreamed. In this tapestry of bits and bytes, where algorithms hum a symphony of possibility, let us wander, hand in hand, through the labyrinth of imagination.`

// Splitter ALLE tegn i individuelle indexer
console.log(someText.split(""))

// Splitter alle ord i individuelle indexer
const countWords = someText.split(" ")
console.log(countWords)

if (countWords < 50) {
    console.log("you have to few words")
} else {
    console.log("there is enough words!")
}

// Splitter hele teksten inn i en index
console.log(someText.split("  "))
const newText = someText.split("In")
console.log(newText)

// gjør det samme som .split("In"):
console.log(someText.split(/In/g))

// bytter ut første parameter med andre parameter. Kun første instans som passer med første parameter blir byttet ut
console.log(someText.replace("a", "eeeee"))
// bytter ut første parameter med andre parameter. ALLE instanser som passer med første parameter blir byttet ut 
console.log(someText.replaceAll("a", "oha"))

let part1 = "Hello"
let part2 = "world!"

console.log(part1+" " +part2)

// kombinerer variabler sammen. Det er ingen begrensning på antall parametere 
const combinedParts = part1.concat(" ", part2, " ", "JEBUS!")

console.log(combinedParts)


//! Integers / Floats

// eksempel på float:
const x = 15.342684432
// kan gjøres om til float via parseFloat:
const y = "32.876"
// eksempel på integer:
const z = 4
// kan gjøres om til integer via parseInteger:
const w = "4"

console.log(x,y,z,w)


// velger hvor mange decimaler som skal vises:
console.log(x.toFixed(1))
// formater tallet med en spesifisert presisjon:
console.log(x.toPrecision(3))
// formaterer tallet ved bruk av vitenskapelig notasjon
console.log(x.toExponential(3))

// formeterer fra string til integer:
console.log(parseInt(w))
// gjør det samme som setningen over:
console.log(Number(w))

// formeterer fra integer til string:
console.log(z.toString())
// gjør det samme som setningen over:
console.log(String(x))

//! Arrays:

let fruits = ["Apple", "Pear", "Mango", "Peach", "Melon", "Banana"]

// få lengden på arrayet:
console.log(fruits.length)

// konverterer et array til en string:
const convertFruitsArrayToString = fruits.join(" ")
console.log(convertFruitsArrayToString)

//! Ikke en god metode for å gjøre et array til en string:
// console.log(fruits.toString())

// fjerner siste index fra fruits arrayet:
const deletedFruit = fruits.pop()
console.log(deletedFruit)
// sjekker arrayet igjen for å se at siste array har blitt fjernet:
console.log(fruits)

// legger til det som er i parameteret på slutten av arrayet:
fruits.push("Lemon")
console.log(fruits)

// legger til det som er i parameteret på starten av arrayet:
fruits.unshift("Orange")
console.log(fruits)

// endrer på verdien i en index:
fruits[3] = "Mangosteen"
console.log(fruits)

let fruits2 = ["Cherry", "Strawberry", "Blueberry"]

// setter sammen to arrays med concat:
const combinedArray = fruits.concat(fruits2)
console.log(combinedArray)
// setter sammen to arrays og i tillegg legger ved en ekstra index:
const combinedArrayWithExtrafruit = fruits.concat(fruits2, ["Mandarin"])
console.log(combinedArrayWithExtrafruit)

// endrer innholdet i arrayet med splice. Her fjerner vi index 2,3 og 4 og bytter det ut med de 3 siste parameterene.
fruits.splice(2,2, "Grapes", "Kiwi", "Pomegranate")
console.log(fruits)

console.log(fruits.indexOf("Melon"))

// .includes: Sjekk om et element er tilstede i arrayet. Returnerer true eller false
console.log(fruits.includes("Apple"))
console.log(fruits.includes("Pomelo"))

if (fruits.includes("Apple")) {
console.log("Apple is in the array");
} else {
    console.log("Apple is in NOT the array");
}
// kan forkortes slik:
fruits.includes("Pomelo") ? console.log("Apple is in the array") :
console.log("Apple is in NOT the array");

// kan forkortes slik hvis man kun trenger en if og ikke else statement:
fruits.includes("Pomelo") && console.log("Apple is in the array")

// sorterer arrayet i alfabetisk rekkefølge:
// fruits.sort()
// fruits.reverse()

// console.log(fruits.sort())
// snur arrayet:
// console.log(fruits.reverse())

//! Kombinere metoder

// Reverser arrayet med reverse, slår sammen med join, konverterer til store bokstaver med toUpperCase, konverterer tilbake til array med split
console.log(fruits.reverse().join(" ").toUpperCase().split(" "))


const myString2 = "Dette er en string"
// Reverser en streng: Gjør en string om til et array med individuelle tegn i indexer med split, reverserer arrayet med reverse, konverterer tilbake til en string:
console.log(myString2.split("").reverse().join(""))


function fancyBackwardString(str) {
    return str.split("").reverse().join("")
}

const fancyBackwardStringArrow = (str) => str.split("").reverse().join("")

console.log(fancyBackwardString("Joakim"))
console.log(fancyBackwardStringArrow("Joakim"))

const user = "joakim"

const makeFirstLatterUpperCase = (str) => 
`${str[0].toUpperCase()}${str.slice(1)}`

console.log(makeFirstLatterUpperCase(user))

























