let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let userName = document.querySelector('.name');

document.querySelector('.namebtn').addEventListener('click', function () {
  message.textContent = `Best of luck ${userName.value}!`;
});
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(guess.value);
  if (!guessNumber) {
    message.textContent = '⛔ No number';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, #753682 0%, #bf2e34 100%)';
  } else if (guessNumber === secretNumber) {
    message.textContent = `🎉 Correct Guess ${userName.value}!`;
    document.querySelector('body').style.background =
      'linear-gradient(to top left, #28b487, #7dd56f)';
    document.querySelector('.number').style.width = '18%';
    document.querySelector('.number').style.left = '42.5%';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = score;
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      guessNumber > secretNumber
        ? (message.textContent = `📈 Guess is high ${userName.value}!`)
        : (message.textContent = `📉 Guess is low ${userName.value}!`);
      score--;
      document.querySelector('body').style.backgroundImage =
        'linear-gradient(to top left, #753682 0%, #bf2e34 100%)';
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😔 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//start again button event listener
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  message.textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top left, #753682 0%, #bf2e34 100%)';
  document.querySelector('.guess').value = '';
  document.querySelector('.name').value = '';
  document.querySelector('.number').style.width = '8rem';
  document.querySelector('.number').style.left = '45%';
});
//opening rules model
document.querySelector('.rules').addEventListener('click', function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
});
//closing rules model with cross sign
document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
//closing rules model when we click outside the box
document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

//closing by pressing escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  }
});
