var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

document.getElementById("guessBtn").addEventListener("click", function () {
    var guess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (guess === randomNumber) {
        displayMessage("Congratulations! You guessed the number in " + attempts + " attempts.");
        document.getElementById("guessBtn").disabled = true;
    } else if (guess > randomNumber) {
        displayMessage("Too High! Try a Lower Number");
    } else {
        displayMessage("Too Low! Try a Higher Number");
    }
});

function displayMessage(message) {
    document.getElementById("Message").textContent = message;
}