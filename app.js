const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

 function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
 }

 function generateResult () {
    if(computerChoice === userChoice) {
        result = 'its a draw'
    }
    if(computerChoice === 'rock' && userChoice=== 'paper') {
        result = 'Computer wins'
    }
    if(computerChoice === 'paper' && userChoice=== 'scissor') {
        result = 'User wins'
    }
    if(computerChoice === 'paper' && userChoice=== 'rock') {
        result = 'Computer wins'
    }
    if(computerChoice === 'rock' && userChoice=== 'scissor') {
        result = 'User wins'
    }
    if(computerChoice === 'scissor' && userChoice=== 'paper') {
        result = 'Computer wins'
    }
    resultDisplay.innerHTML = result
 }

