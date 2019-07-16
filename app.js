/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundscore, activeplayer, playerpoints, gameplaying, record;

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
     if (gameplaying){
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
    }
});

document.querySelector('.btn-hold').addEventListener('click', function (){
    if (gameplaying){
        // add current score
        scores[activeplayer] += roundscore;

        //update UI
        document.getElementById('score-'+activeplayer).innerHTML = scores[activeplayer]

        // check if won
        
        var record = document.getElementById('record').value;
        
        
        //UNDEFINED, 0 OR NULL
        if (record){
           if(scores[activeplayer] >= record){
               won();
            }else{
                //next player
                nextplayer();
            }          
        }else{
            if(scores[activeplayer] >= 100){
                won();
            }else{
                //next player
                nextplayer();
            }            
        }

       
    }
});


document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0, 0];
    roundscore = 0;
    activeplayer = 0; // 0 is player 1 and 1 is player 2
    playerpoints = 0;
    gameplaying = true;

    
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
    
    var record = document.getElementById('record').value = "";
    
}



function won () {
    document.getElementById('name-'+activeplayer).textContent = 'WINNER';
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
    document.querySelector('.dice').style.display = 'none';
    gameplaying = false; 
}


/*

YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/






/* challenge 2 

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)

*/










