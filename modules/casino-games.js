/**
 * CasinoJS - Games Module
 * this file contains only functions which are related with the casino's games
 */


/**
 * this function is responsible of the user interaction in order to obtain
 * a valid "menu choiche" from the user.
 *
 * the choiche should be a valid game value or the request to leave the casino.
 *
 * this is a really difficult function to test because of the recursion, we
 * solve the problem by pushing outside the function as many resposibilities as possible:
 *
 * - data validation
 * - data manipulation
 *
 * both those responsibilities are implemented into dedicated functions (below)
 * that can be unit tested.
 *
 */
function chooseUserAction() {
    
    var choice = prompt(['Which game do you want to play?',
                         'test, test, test',
                         '',
                         '(Cancel for quit the casino)'
                        ].join('\n'));
    
    if (isValidUserAction(choice)) {
        return parseUserAction(choice);
    }
    
    alert(['This is not a valid user choiche!',
           'Please insert an option from the list!'
          ].join('\n'));
    
    return chooseUserAction();
    
}


/**
 * this function is responsible of validatin a user action variable.
 *
 * ---
 * this a fully unit test enabled function!
 * ---
 */
function isValidUserAction(action) {
    
    if (action === null) {
        return true;
    }
    
    if (action === 'test') {
        return true;
    }
    
    return false;
    
}


/**
 * this function is responsible to investigate a user action variable
 * in order to convert a "Cancel" choiche into the correct exit value
 *
 * ---
 * this a fully unit test enabled function!
 * ---
 */
function parseUserAction(action) {
    
    if (action === null) {
        return 'exit';
    }
    
    return action;
    
}


/**
 * this function still a fake, she does nothing but make the user loose a
 * fixed amount of money every time she run.
 *
 * however it is important to add the UI even there in the fake so we are
 * able to execute a full CasinoJS experience even if there are no games yet.
 */
function playTheGame(game, wallet) {
    
    console.log('play the game', game, 'whit a wallet of', wallet);
    
    alert(['play the game "' + game + '" whit a wallet of "' + wallet + '"',
           '(this is a fake game with a fixed loose of 10!)'
          ].join('\n'));
    
    return wallet - 10;
    
}
