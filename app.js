/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundscore, activeplayer, playerpoints;

init();





function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;
    // result 0 then set 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // toggle css active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    
}

document.querySelector('.btn-roll').addEventListener('click', function (){
    // random number
    let dice = Math.floor(Math.random()*6)+1; 
    // display image 
    let dicedata = document.querySelector('.dice');
    dicedata.src = 'dice-'+dice+'.png';
    dicedata.style.display = 'block';
    // result if the result ! 1
    if (dice !== 1){
        roundscore += dice;
        document.querySelector('#current-'+activeplayer).textContent = roundscore;
    }else{
        //next player
        nextplayer();
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function (){
    // add current score
    scores[activeplayer] += roundscore;
    
    //update UI
    document.getElementById('score-'+activeplayer).innerHTML = scores[activeplayer]
  
    // check if won
    
    if(scores[activeplayer] >= 10){
        document.getElementById('name-'+activeplayer).textContent = 'WINNER';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').removeEventListener('click');
    }else{
        //next player
        nextplayer();
    }

});


document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0, 0];
    roundscore = 0;
    activeplayer = 0; // 0 is player 1 and 1 is player 2
    playerpoints = 0;
    
    
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').innerHTML = '0';
    
    document.getElementById('name-0').textContent = "player 1";
    document.getElementById('name-1').textContent = "player 2";
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}









