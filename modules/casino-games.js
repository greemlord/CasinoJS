/**
 * CasinoJS - Games Module
 * this file contains only functions which are related with the casino's games
 */

function chooseUserAction() {
    
    console.log('choose the game');
    
    return 'dices';
}


function playTheGame(game, wallet) {
    
    console.log('play the game', game, 'whit a wallet of', wallet);
    
    return wallet - 10;
}