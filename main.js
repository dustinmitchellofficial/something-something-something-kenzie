// We need to select a random item from the dominoes list with Math.random()


// I want an array of domino list items, and I will pick a random one using a random index between 0 and the length of the array.



// NodeList -> Array.from() -> Array
let dominoElements = Array.from(document.querySelectorAll("#dominoes-list li"))
console.log(dominoElements[32])

function getRandomNumber (min, max) {
    // Source: https://stackoverflow.com/a/7228322/1034856
    // License: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

let firstIndex = 0
let lastIndex = dominoElements.length - 1
let randomIndex = getRandomNumber(firstIndex, lastIndex)
let randomDomino = dominoElements[randomIndex]

console.log(randomDomino)
randomDomino.classList.add("selected")

// search for classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList