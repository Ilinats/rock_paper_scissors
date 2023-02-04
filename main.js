var playerAnswer;
var generatedAnswer;
var result;

const Options = ["rock.png", "paper.png", "scissors.png"];

function saveAnswer(btn) {

    generatedAnswer = Math.floor(Math.random() * 3);
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
    var index = 0;
    interval = setInterval(() =>
        {
            console.log("Minava 2: " + index);
            document.getElementById("myImageId").src = Options[Math.floor(Math.random() * 3)];
        }
        ,100);
}
function stopShuffle() {
  clearInterval(interval);
}

// var isClicked = 0;

// function ImageSet() {
//     let index = Math.floor(Math.random() * 3);
//     document.getElementById("myImageId").src = Options[index];
//     if(!isClicked)
//         setTimeout(ImageSet, 50);
// }

// function stopImage() {
//   isClicked = 1;
// }