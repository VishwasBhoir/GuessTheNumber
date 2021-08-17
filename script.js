'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.play-again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score < 1) {
    document.querySelector('.message').textContent = '😫 You Lost!';
  } else {
    if (!guess) {
      document.querySelector('.message').textContent = '🙄 No number';
    } else if (guess > 20) {
      document.querySelector('.message').textContent =
        'Number is Greater than 20';
    } else if (guess === number) {
      document.querySelector('.message').textContent = '🎉 Currect Number!';
      if (highscore < score) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document
  .querySelector('.reset-highscore')
  .addEventListener('click', function () {
    highscore = 0;
    document.querySelector('.highscore').textContent = highscore;
  });
