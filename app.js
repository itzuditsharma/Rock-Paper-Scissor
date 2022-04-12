const game = () => {
    let pScore = 0;
    let cScore = 0;


    // Start the game 
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');


        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut'); //class fadeOut
            match.classList.add('fadeIn');  //class fadeIn
        });
    };

    // Play Match 
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');  //Selecting images
        const computerHand = document.querySelector('.computer-hand');  //Selecting images
        const hands = document.querySelectorAll('.hands img'); 

        // this is going to run when the animation ends 
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
                // when animation ends do nothing 
            });
        });

        // Computer options -> randomly generated
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                // Compute choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                // here is where we call compare hands 

                compareHands(this.textContent, computerChoice);
                // Update images 
                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;
                }, 2000);
                
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });
    };


    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update Text 
        const winner = document.querySelector('.winner');
        // Checking for  tie 
        if(playerChoice === computerChoice){
            winner.textContent = "⛳It is a Tie⛳";
            return;
        }

        // Checking for rock 
        if(playerChoice === "rock"){
            if(computerChoice === 'scissors'){
                winner.textContent = '⛳Player wins';
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer Wins⛳";
                cScore++;
                updateScore();
                return;
            }
        }

        // Checking for paper 
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins⛳';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "⛳Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        // Checking for scissor 
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins⛳';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "⛳Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

    }

    // Call all the inner functions 
    startGame();
    playMatch();
    // updateScore();
};
// Start the game function 
game();