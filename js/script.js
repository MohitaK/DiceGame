console.log("Hi");
var score, roundScore, activePlayer, dice, gamePlaying;

init ();

document.querySelector('.btn-roll').addEventListener('click', function () {

  if (gamePlaying) {
    //Generate a Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //Displaying Result to the DOM
    document.querySelector('.dice').src = 'images/dice-' + dice + '.png';
    document.querySelector('.dice').style.display = 'block';

    //Update Round Score IF Number is NOT equal to 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      //Next Player
      nextPlayer ();
    }
  } else {
    alert('Game Over! Please start New Game to play more!');
  }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    //Add Score to the Main Score
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

      //Winner
    if (score[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('.dice').style.display = 'none';
      gamePlaying = false;
    } else {
      //Next Player
      nextPlayer ();
    }
  }
});

//DRY Code in Practice, Don't Repeat Yourself
function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
} 

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}


//document.querySelector('#current-' + activePlayer).textContent = dice; //setting the value of current score
//document.querySelector('#current' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //another method using inner HTML
//var x = document.querySelector('#score-0').textContent; //getting the value into x
//console.log(x);

