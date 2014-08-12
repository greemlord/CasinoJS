/**
 * CasinoJS - The Big Picture
 *
 * this is the implementation of the "big picture", it is a fully
 * functional application that takes all the possible shortcuts in order
 * to complete a "development level".
 *
 * "shortcuts" most of the time mean "fakes", to use hard coded values
 * which represents just the outcome of a complex operation.
 *
 * The following code implements very few real logic and fakes all the
 * most complicated operations.
 *
 * ---
 * NOTE: we use a lot of `console.log` all among the code just to be able
 * to follow the code execution in the developer tools console.
 * ---
 *
 */



function CasinoJS() {
    
    console.log(">>> let's play CasinoJS!");
    
    var wallet = createTheWallet();
    
    console.log('we will play with a wallet of', wallet);
    
    if (userCanPlay(wallet) === true) {
        playLoop(wallet);
    } else {
        exitNoMoney();
    }
    
}


function playLoop(wallet) {
    
    console.log('-- play a new round');
    
    var action = chooseUserAction();
    
    if (action === 'exit') {
        exitWithWallet(wallet);
        return;
    }
    
    wallet = playTheGame(action, wallet);
    
    if (userCanPlay(wallet)) {
        playLoop(wallet);
    } else {
        exitLooser();
    }
    
}


function userCanPlay(wallet) {
    
    var result = wallet > 0;
    
    console.log('with a wallet of', wallet, 'userCanPlay return', result);
    
    return result;
}


function createTheWallet() {
    
    console.log('create the wallet');
    
    return 50;
}


function chooseUserAction() {
    
    console.log('choose the game');
    
    return 'dices';
}


function playTheGame(game, wallet) {
    
    console.log('play the game', game, 'whit a wallet of', wallet);
    
    return wallet - 10;
}


function exitWithWallet(wallet) {
    console.log('<<< you leave the casino with a wallet of', wallet);
}


function exitNoMoney(wallet) {
    console.log('<<< you can\'t even start to play with no money!');
}


function exitLooser() {
    console.log('<<< you have no money back you looser!');
}

