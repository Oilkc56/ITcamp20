document.addEventListener('DOMContentLoaded', function () {
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');
    const scoreDisplay = document.createElement('div'); 
    scoreDisplay.setAttribute('id', 'score'); 
    document.body.appendChild(scoreDisplay); 
  
    let playerScore = 0;
    let computerScore = 0;
    
    updateScoreDisplay(); 
  
    choices.forEach(choice => choice.addEventListener('click', playGame));
  
    function playGame() {
      const playerChoice = this.dataset.choice;
      const computerChoice = getComputerChoice();
      const winner = getWinner(playerChoice, computerChoice);
  
      
      if (winner === 'You win!') {
        playerScore++;
      } else if (winner === 'Computer wins!') {
        computerScore++;
      }
  
      updateScoreDisplay();
  
      result.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
    }
  
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function getWinner(player, computer) {
      if (player === computer) {
        return "It's a tie!";
      } else if ((player === 'rock' && computer === 'scissors') ||
                 (player === 'paper' && computer === 'rock') ||
                 (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }
  
    function updateScoreDisplay() {
      scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  });