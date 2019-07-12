// HTTP (Hypertext Transfer Protocol)
// Request to the server - What we want to do
// Response from the server - What was actually done

'use strict'

const puzzleElement = document.querySelector("#puzzle")
const guessElement = document.querySelector("#guessesLeft")
const statusElement = document.querySelector("#status")

let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    if (game1.status === 'playing') {
        game1.makeGuess(guess)
        render()
    }
})

const render = (word) => {
    const puzzle = game1.puzzle.split('')
    let letterElement = ''
    
    puzzle.forEach((letter) => {
        letterElement += `<span>${letter}</span>`
    })

    puzzleElement.innerHTML = letterElement

    guessElement.textContent = `Guesses left: ${game1.remainingGuesses}`
    statusElement.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render(puzzle)
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// --------------------------------------------------------------------------------------------------------------------------

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })





