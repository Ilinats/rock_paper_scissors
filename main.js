var playerAnswer;
var generatedAnswer;
var result;

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