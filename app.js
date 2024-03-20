
function showAlert() {
    var userInput = prompt("Please enter your name:");
    var userEmail = prompt("Please enter your email:");


    if (userInput !== null) {
        alert("Congratulations " + userInput + "!  You have successfully registered for free yoga classes.");
    } else {
        alert("You cancelled the prompt.");
    }
}

document.getElementById("myButton").addEventListener("click", showAlert);
