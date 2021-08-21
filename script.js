'use strict';

function getRand() {
    return Math.trunc( Math.random() * 20 ) + 1;
}

let secretNumber = getRand();
let score = +document.querySelector('.score').textContent;
let highScore = 0;

document.querySelector('.again').addEventListener(
    'click', () => {
        score = 20;
        secretNumber = getRand();
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = "";
    }
)

document.querySelector('.check').addEventListener(
    'click', () => {
        const guess = document.querySelector('.guess').value;
        // console.log( guess, typeof guess );

        // This commented below is simple code that I then understand if this is in GameLoop
        // const message = document.querySelector('.message').textContent;
        // console.log( message );

        // Logic
        if( guess === "" ) {
            document.querySelector('.message').textContent = 'Please provide some number';
        }
        else if ( score > 0 && score <= 20 ) {
            if ( guess == secretNumber ) {
                document.querySelector('.message').textContent = '🎉 Let\'s Goo!';

                const numberProperties = document.querySelector('.number');
                numberProperties.textContent = guess;
                numberProperties.style.width = '30rem';

                document.querySelector('body').style.backgroundColor = 'rgba(20, 215, 30, 1)';

                if( highScore < score ) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                    document.querySelector('.message').textContent = '🎆 Congrats! New Highscore.';
                }
            }
            else if ( guess > secretNumber ) {
                document.querySelector('.message').textContent = '📈 Too High!';
                score--;
            }
            else if ( guess < secretNumber ) {
                document.querySelector('.message').textContent = '📉 Too Low!';
                score--;
            }
        }
        else {
            document.querySelector('.message').textContent = '🌠 Too Further and Beyond!'
        }

        // Update Frame
        if( score > 0 )
            document.querySelector('.score').textContent = score;
        else {
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'rgba( 200, 50, 50, 1 )';
            document.querySelector('.message').textContent = '⛔ Lose, but just try it again!';
        }

    }
);