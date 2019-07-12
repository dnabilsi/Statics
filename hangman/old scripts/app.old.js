// HTTP (Hypertext Transfer Protocol)
// Request to the server - What we want to do
// Response from the server - What was actually done

'use strict'

const game1 = new Hangman('Santa Cruz', 3)

const puzzleElement = document.querySelector("#puzzle")
const guessElement = document.querySelector("#guessesLeft")
const statusElement = document.querySelector("#status")

puzzleElement.textContent = game1.word.join('').replace(/\w/gi,'*')


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    if (game1.status === 'playing') {
        game1.makeGuess(guess)
        puzzleElement.textContent = game1.puzzle
        guessElement.textContent = `Guesses left: ${game1.remainingGuesses}`
        statusElement.textContent = game1.statusMessage
    }
})

getPuzzle((puzzle) => {
    console.log(puzzle)
})

//--------------------------------------------------------------------------------

// Making an HTTP request

//restcountries.eu
//https://restcountries.eu/rest/v2/all






//name
//alpha2code
// const countryCode = 'GB'
// const country = data.filter(item, () => {
//     item.alpha2code === countryCode
// })

// console.log(country)




