/**
 * CasinoJS - The Big Picture
 * we used some external modules to push outside all the implementations which are
 * not strictly related with the "big picture".
 *
 * Now this just a "director", his responsibility is to use different functions from
 * different modules in order to "make things working".
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



