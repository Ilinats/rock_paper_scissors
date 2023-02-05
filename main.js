var playerAnswer;
var generatedAnswer;
var result;
var playerScore = 0;
var generatedScore = 0;
const Options = ["rock.png", "paper.png", "scissors.png"];
const Results_table = ["It's a draw!", "You win!", "You lose!"];

window.addEventListener("load", startShuffle, false);

var interval;

function startShuffle() {
    interval = setInterval(() =>
        {
            let index = Math.floor(Math.random() * 3);
            document.getElementById("myImageId").src = Options[index];
            generatedAnswer = index;
        }
        ,100);

        document.getElementById("playerResult").innerHTML = playerScore;
        document.getElementById("generatedResult").innerHTML = generatedScore;
}

function stopShuffle(elem) {
    clearInterval(interval);
    playerAnswer = elem.dataset.index;
    document.getElementById('paper').style.pointerEvents = 'none';
    document.getElementById('scissors').style.pointerEvents = 'none';
    document.getElementById('rock').style.pointerEvents = 'none';
    checkAnswer();
    addClass(elem);
}

function checkAnswer() {
    if(generatedAnswer == playerAnswer) 
        result = 0;     //Result equals 0 because there is a draw
    else if(generatedAnswer == 0 && playerAnswer == 2)
        result = 2;    //Greater than 1 when computer wins
    else if(generatedAnswer == 2 && playerAnswer == 0)
        result = 1;     //1 when player wins
    else 
        result = (generatedAnswer > playerAnswer) ? 2 : 1;
}

function addClass(elem) {
    document.getElementById('Results').innerHTML = Results_table[result];
    document.getElementById("resultContainer").classList.remove("hide");
    
    if(result == 1) {
        playerScore ++;
        elem.classList.add('winner');
        document.getElementById("myImageId").classList.add('loser');
    } else if(result == 2) {
        generatedScore++;
        elem.classList.add('loser');
        document.getElementById("myImageId").classList.add('winner'); 
    }
}

function playAgain() {
    document.getElementById('paper').style.pointerEvents = 'auto';
    document.getElementById('scissors').style.pointerEvents = 'auto';
    document.getElementById('rock').style.pointerEvents = 'auto';
    startShuffle();
    document.getElementById("resultContainer").classList.add("hide");
    var buttons = document.getElementsByClassName('btn');
    
    for (let button of buttons) {
        button.classList.remove('loser');
        button.classList.remove('winner');
    }
    
    return false;
}