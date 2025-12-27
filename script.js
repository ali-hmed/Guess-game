document.addEventListener("DOMContentLoaded", function(){

    let targetNumber;
    let attempts;
    let maxAttempts = 10;
    const submitButton = document.getElementById("submit");
    const newGameButton = document.getElementById("newGame");
    const guessInput = document.getElementById("guessInput");
    const result = document.getElementById("result");
    const attemptsDisplay = document.getElementById("attempts");

    function startNewGame(){
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        attemptsDisplay.textContent = `Attempts: ${attempts}/${maxAttempts}`;
        result.textContent = "";
        guessInput.value = "";
        guessInput.focus();
    }

    function checkGuess(){
        const guess = parseInt(guessInput.value);
        if(isNaN(guess) || guess < 1 || guess > 100){
            result.textContent = "🤦 Please enter a valid number between 1 & 100.";
            result.style.fontSize = "18px";
            result.style.fontWeight = "480";
            result.style.color = "#ff0606ff";
            return;
        }
        attempts++;
        if(guess === targetNumber){
            result.textContent = "🎉Congratulations! You guessed the number.";
            
            result.style.fontWeight = "bold";
            result.style.color = "yellow";
        }else if(attempts === maxAttempts){
            result.textContent = `Game Over! The number was ${targetNumber}.`;
            result.style.fontWeight = "460";
            result.style.color = "red";
           
        }else{
            result.textContent = guess < targetNumber ? "📉Too low!" : "📈Too high!";
            result.style.fontWeight = "bold";
            result.style.color = guess < targetNumber ? "red" : "orange";
            attemptsDisplay.textContent = `Attempts: ${attempts}/${maxAttempts}`;
            attemptsDisplay.style.fontSize='18px';
            attemptsDisplay.style.fontWeight='bold';
        }

       
        guessInput.value = "";
        guessInput.focus();
    }

    submitButton.addEventListener("click", checkGuess);
    newGameButton.addEventListener("click", startNewGame);
    startNewGame();

    
})
    
