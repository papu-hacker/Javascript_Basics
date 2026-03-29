let randomNumber = Math.round(Math.random() * 100 + 1);
// console.log(num);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        // console.log(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('plz enter valid number')
    } else if (guess < 1) {
        alert('plz enter number greater than 1')
    } else if (guess > 100) {
        alert('plz enter number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMsg(`Game over number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`You win ${guess}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg('Number is Low')
    } else if (guess > randomNumber) {
        displayMsg('Number is High')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesses.innerText += `${guess},  `
    numGuess++;
    remaining.innerText = `${11 - numGuess}`
}

function displayMsg(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id=newGame>Start new game</h2>`;
    resultParas.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    let newgamebtn = document.querySelector('#newGame')
    newgamebtn.addEventListener('click', function (e) {
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guesses.innerHTML = ''
        remaining.innerText = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}
