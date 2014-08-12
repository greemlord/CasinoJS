/**
 * CasinoJS - Wallet Module
 * this file will contains only functions which are related to the wallet.
 * 
 */

/**
 * this function is responsible of asking the user the amount of money he/she wants
 * to risk during the game.
 *
 * User's answer must be checked and validated and we do that by 
 * using an external function which is dedicated to this objective.
 *
 * By demanding the data validation to a specific external function we leave
 * to the "createTheWallet()" the only responsibility of asking for the
 * wallet input as long as it requires for the user to provide a correct input.
 *
 * Even if this is a really difficult function to unit test, his behavior 
 * and his responsibility are highly visible during the manual testing and
 * they rely on system funciton or fully testable application functions.
 */

function createTheWallet() {
    
    console.log('create the wallet');
    
    // transform the prompt string output to a numeric integer value
    var wallet = checkWalletInput(prompt('How much do you want to play tonight?'));
    
    // a valid wallet cause the function to exit with the wallet as returning value!
    if (wallet !== false) {
        return wallet;    
    }
    
    alert([
        'This is not money!',
        'Please insert a numeric amount!'
    ].join('\n'));
    
    return createTheWallet();
    
}

/**
 * validate the wallet value to be a positive integer:
 * - only integers are accepted
 * - negative values are refused
 * - 0 is a perfet valid value, (but I doubt that they allow to enter a casino with no money :-)
 *
 * ---
 * this a fully unit test enabled function!
 * ---
 */

function checkWalletInput(input) {
    
    var wallet = parseInt(input);
    
    if (isNaN(wallet)) {
        return false;
    }
    
    if (wallet < 0) {
        return false;
    }
    
    return wallet;
    
}


/**
 * this function has the responsibility to check if the user is allowed to
 * play with his wallet.
 *
 * here we are sure we receive a valid wallet so the only responsibility here is to
 * check whether the wallet is positive and greater than 0!
 *
 * ---
 * this a fully unit test enabled function!
 * ---
 */

function userCanPlay(wallet) {
    
    var result = wallet > 0;
    
    console.log('with a wallet of', wallet, 'userCanPlay return', result);
    
    return result;
    
}
