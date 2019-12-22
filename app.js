var scores,activePlayer,roundScore,dice,isplaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    //After clicking the following action happens
    if(isplaying)
    {
    //1.Generate a random number
    dice = Math.floor(Math.random()*6+1);
    
    // 2.display the dice
    var short = document.querySelector('.dice');
    short.style.display = 'block';
    short.src = 'dice-'+dice+'.png';

    // 3.Calculating the round value player change
    if(dice!==1){
     roundScore += dice;
     document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    else{
        // nextplayer
        nextPlayer();
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){

   if(isplaying)
   {
        // Adding to the global scores
     scores[activePlayer] +=roundScore;
     document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    // if any of the player wins
    if(scores[activePlayer] >= 100)
    {
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isplaying = false;
    }
    else{
        // nextplayer
        nextPlayer();
    }
   }

});

// Code to start a new game
document.querySelector('.btn-new').addEventListener('click',init);


// The next player code
function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}
// To intilaze the game
function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isplaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
