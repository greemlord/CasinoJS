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



/**
 * Entry Point:
 * - the user enter the casino, 
 * - the user changes some money into chips (the wallet),
 * - the user starts to play ONLY IF he has money in the wallet
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


/**
 * Game Session:
 * - choose which game (or exit)
 * - play the game
 * - check the wallet
 * (the user PLAY UNTIL there are money in the wallet)
 */
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

/**
 * It validates the wallet: transform the wallet into a boolean value.
 * the name of this function has been choosen in order to make
 * sense when used into a conditional:
 *
 * IF USER CAN PLAY -- THEN -- ELSE
 *
 * ---
 * Some times we want to encapsulate some logic (even simple) into functions
 * just to be able to compose sentences with function's names!
 * ---
 */
function userCanPlay(wallet) {
    
    var result = wallet > 0;
    
    console.log('with a wallet of', wallet, 'userCanPlay return', result);
    
    return result;
}

/**
 * the minimal effort in order to create a valid wallet...
 * ... is just to return an hard coded amount of money.
 *
 * ---
 * then we should TEST THE BIG PICTURE logic just by trying to
 * modify this hard coded value during our development.
 * ---
 */
function createTheWallet() {
    
    console.log('create the wallet');
    
    return 50;
}

/**
 * the minimal effort in order to handle a user choice...
 * ... is just to hard code a choiche without even asking!
 *
 * ---
 * then we should TEST THE BIG PICTURE logic just by trying to
 * modify this hard coded value during our development.
 * ---
 */
function chooseUserAction() {
    
    console.log('choose the game');
    
    return 'dices';
}

/**
 * the minimal effort in order to handle a game logic...
 * ... is just to make the player loose money every time!
 *
 * ---
 * then we should TEST THE BIG PICTURE logic just by trying to
 * modify this hard coded value during our development.
 * ---
 */
function playTheGame(game, wallet) {
    
    console.log('play the game', game, 'whit a wallet of', wallet);
    
    return wallet - 10;
}


/**
 * These are different ways to quit the casino
 */

function exitWithWallet(wallet) {
    console.log('<<< you leave the casino with a wallet of', wallet);
}

function exitNoMoney(wallet) {
    console.log('<<< you can\'t even start to play with no money!');
}

function exitLooser() {
    console.log('<<< you have no money back you looser!');
}

