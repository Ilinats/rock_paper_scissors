var result = localStorage.getItem("Result");
document.getElementById("Results").innerHTML = result;

var generatedAnswer= localStorage.getItem("GeneratedAnswer");
document.getElementById("ComputerChoice").innerHTML = generatedAnswer;

const Results_table = ["It's a draw!", "You win!", "You lose!"];
const Options = ["Rock", "Paper", "Scissors"];


window.onload = function addValue() {
    document.getElementById('Results').innerHTML = Results_table[result];
    document.getElementById('ComputerChoice').innerHTML = Options[generatedAnswer];
}