'use strict'

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.makeGuess = function (guess) {

    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)

        if(isBadGuess)
            this.remainingGuesses--
    }

    this.getStatus()

}  

Hangman.prototype.getStatus = function () {

    // if(this.status !== 'playing')
    //     return
    
    if (!this.remainingGuesses) {
        this.status = 'failed'
    } else {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter)) 
             
        if(finished)
            this.status = 'finished'
    }

}  

Hangman.prototype.getStatusMessage = function () {
    
    let statusMessage


    switch(this.status) {
        case 'playing':
            statusMessage = `Playing -> Guesses left ${this.remainingGuesses}`
            break
        case 'failed':
            statusMessage = `Failed -> Nice try! The word was "${this.word}".`
            break
        case 'finished':
            statusMessage = 'Finished -> Great work! You guessed the word.'
            break
        default:
            statusMessage = `Status = ${this.status} is not recoginsed`
    }

    return statusMessage
}  



Hangman.prototype.getPuzzle = function () {

    let correctGuess 

    const guessesSoFar = this.guessedLetters.length

    let puzzle = `\nGuesses "${this.guessedLetters[0]}"`

    if (guessesSoFar > 1) {
        this.guessedLetters.slice(1, guessesSoFar - 1).forEach((letter) => {
            puzzle += `, "${letter}"`
        })

        puzzle += ` and "${this.guessedLetters.slice(-1)}"`
    }

    puzzle += '? -> '

    this.word.map((letter) => {
        correctGuess = this.guessedLetters.includes(letter)
        correctGuess || letter === ' ' ? puzzle += letter : puzzle += '*'
    })

    return puzzle    
}




