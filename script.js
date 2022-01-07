'use strict';

let player0Elm = document.querySelector('.player--0');
let player1Elm = document.querySelector('.player--1');
let score0Elm = document.querySelector('#score--0');
let score1Elm = document.querySelector('#score--1');
let diceElm = document.querySelector('.dice');
diceElm.classList.add('hidden');

let score0 = document.querySelector('#score--0').textContent = 0;
let score1 = document.querySelector('#score--1').textContent = 0;

let activePlayer = 0;
let finalScores = [0,0];
let turnScore = 0;
document.querySelector('.btn--roll').addEventListener('click',function(){
    let random  = Math.trunc(Math.random()*6+1);
    diceElm.classList.remove('hidden');
    diceElm.src = `dice-${random}.png`;
    if(random === 1) {
        turnScore = 0;
       if(player0Elm.classList.contains('player--active')){
           document.getElementById(`current--${activePlayer}`).textContent = turnScore;
           player1Elm.classList.add('player--active');
           player0Elm.classList.remove('player--active');
           activePlayer = 1;
       }
       else{
           document.getElementById(`current--${activePlayer}`).textContent = turnScore;
           player0Elm.classList.add('player--active');
           player1Elm.classList.remove('player--active');
           activePlayer = 0;
       } 
        
    }
    else{
        turnScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = turnScore;


    }
});
document.querySelector('.btn--hold').addEventListener('click', function(){
    finalScores[activePlayer]+= turnScore;
    document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];
    player0Elm.classList.toggle('player--active');
    player1Elm.classList.toggle('player--active');
    turnScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = turnScore;
    activePlayer = activePlayer === 0 ? 1 : 0;


});

document.querySelector('.btn--new').addEventListener('click', function(){
    

});

