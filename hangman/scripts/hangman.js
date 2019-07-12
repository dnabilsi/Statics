'use strict'

class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    
    makeGuess (guess) {
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

    getStatus () {
        if (!this.remainingGuesses) {
            this.status = 'failed'
        } else {
            const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ') 
                 
            if(finished)
                this.status = 'finished'
        }    
    }

    get statusMessage () {
        let statusMessage

        switch(this.status) {
            case 'playing':
                statusMessage = `Playing -> Guesses left ${this.remainingGuesses}`
                break
            case 'failed':
                statusMessage = `Failed -> Nice try! The word was "${this.word.join('')}".`
                break
            case 'finished':
                statusMessage = 'Finished -> Great work! You guessed the word.'
                break
            default:
                statusMessage = `Status = ${this.status} is not recoginsed`
        }
        return statusMessage
    }

    get puzzle () {
        let puzzle
        let correctGuess 

        const guessesSoFar = this.guessedLetters.length
             
        if (guessesSoFar > 1) {
            this.guessedLetters.slice(1, guessesSoFar - 1).forEach((letter) => {
                puzzle += `, "${letter}"`
            })
    
            puzzle += ` and "${this.guessedLetters.slice(-1)}"`
        }
    
        this.word.forEach((letter) => {
             correctGuess = this.guessedLetters.includes(letter)
             correctGuess || letter === ' ' ? puzzle += letter : puzzle += '*'
        })
      
        return puzzle    
    }

    // get puzzleWord () {
    //     let puzzle = ''
    //     let correctGuess 

    //     this.word.forEach((letter) => {
    //         correctGuess = this.guessedLetters.includes(letter)
    //         correctGuess || letter === ' ' ? puzzle += `<span>${letter}</span>` : puzzle += '<span>*</span>'
    //     })

    //     return puzzle
    // }

}





