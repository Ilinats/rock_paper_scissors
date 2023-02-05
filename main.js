var playerAnswer;
var generatedAnswer;
var result;

const Options = ["rock.png", "paper.png", "scissors.png"];

function saveAnswer(btn) {
    playerAnswer = btn.dataset.index;

    if(generatedAnswer == playerAnswer) 
        result = 0;     //Result equals 0 because there is a draw
    else if(generatedAnswer == 0 && playerAnswer == 2)
        result = 2;    //Greater than 1 when computer wins
    else if(generatedAnswer == 2 && playerAnswer == 0)
        result = 1;     //1 when player wins
    else 
        result = (generatedAnswer > playerAnswer) ? 2 : 1;
        
    localStorage.setItem("Result", result);
    localStorage.setItem("GeneratedAnswer", generatedAnswer);
}

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
}

function stopShuffle(elem) {
  clearInterval(interval);
  console.log(elem);
  elem.classList.add('winner');
  document.getElementById("myImageId").classList.add('loser');

//   document.getElementsByClassName('btn').

}

// function isCorrect() {
//     if(generatedAnswer < 2) 
//         options.classList.add('correct');
//     else
//         options.classList.add('wrong');
// }