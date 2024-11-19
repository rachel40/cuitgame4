const DRAW ='draw'
const PLAYER_WIN ='player win'
const COMPUTER_WIN ='computer win'

let initscorePlayer = 0
let initscoreComputer = 0

let scorePlayer = document.getElementById('score-player')
let scoreComputer = document.getElementById('score-computer')

let imgPlayer = document.getElementById('img-player')
let imgComputer = document.getElementById('img-computer')

let playbutton = document.getElementsByClassName ('play-button')

let imgPath ='images'

let option =['rock','paper','scissor']

function play(Option) {
    let playerDecision = setImage(Option)
    let computerdecision =setImagecomputer()

    setThewinner(playerDecision, computerdecision)
}

function setImage (option) {
    imgPlayer.src = imgPath+'/'+option+'-player.png'

    return option
}

function setImagecomputer() {
    let computerdecision = option[Math.floor(Math.random()*option.length)]
   imgComputer.src = imgPath+'/'+computerdecision+'-computer.png'

   return computerdecision
}
function setThewinner(playerDecision, computerdecision){
    let result =''
    if(playerDecision== 'rock'){
        switch(computerdecision){
            case 'rock':
                result = DRAW 
                break;

            case 'paper':
                result = COMPUTER_WIN
                break;

            case 'scissor':
                result = PLAYER_WIN 
                break;
        }
    }
        if(playerDecision== 'paper'){
            switch(computerdecision){
                case 'paper':
                    result = DRAW 
                    break;
    
                case 'scissor':
                    result = COMPUTER_WIN
                    break;
    
                case 'rock':
                    result = PLAYER_WIN 
                    break;
            }
        }

        if(playerDecision== 'scissor'){
            switch(computerdecision){
                case 'scissor':
                    result = DRAW 
                    break;
    
                case 'rock':
                    result = COMPUTER_WIN
                    break;
    
                case 'paper':
                    result = PLAYER_WIN 
                    break;
            }
        }

    scoring(result)

    function scoring(result) {
        if(result == 'player win') {
            initscorePlayer++
            scorePlayer.innerHTML = initscorePlayer
if (initscorePlayer >=3) {
    for (let i = 0; i <playbutton.length; i++) {
        playbutton[i].setAttribute('disabled', '')
    }
    playAgain(PLAYER_WIN)

}
            }
        }
        if(result == 'computer win') {
            initscoreComputer++
            scoreComputer.innerHTML = initscoreComputer
    if(initscoreComputer >=3) {
        for (let i = 0; i <playbutton.length; i++) {
            playbutton[i].setAttribute('disabled', '')
        }
        playAgain(COMPUTER_WIN)

    }
    }
}
function playAgain (winner) {
    if(confirm(winner+'. play again?')) {
        initscorePlayer = 0
        initscoreComputer = 0
        
        scorePlayer.innerHTML = initscorePlayer
        scoreComputer.innerHTML = initscoreComputer

        for (let i = 0; i <playbutton.length; i++) {
            playbutton[i].removeAttribute('disabled')
        }

    }
}