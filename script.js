'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//CLICK EVENTS

//creating random secret number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //in the code and not the DOM holding the data, aka state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//user input CHECK button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    //if no guess, print 'not a number'
    //always evaluated to as a boolean, so ! inverts from false to true
    displayMessage('🚫 Not Number.');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //highscore after a win
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High.' : '📉 Too Low.');
      score--; //subract the score by 1 with each wrong answer
      displayScore(score);
    } else {
      displayMessage('😖You lose. Hit Again!');
      displayScore(0);
    }
  }
});

//again/reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
//
//
//
//
//
//
//
//
//
/* old code we refactored
 //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😖You lose. Hit Again!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😖You lose. Hit Again!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
