/**
 * CasinoJS - The Big Picture
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
    
    /**
     * During the development of the "casino-games::chooseUserAction()" I faced a big
     * problem which made me thinking on a bad implementation even if all the
     * unit-tests were passing.
     *
     * After some struggling I realised that everything was working fine except that I
     * was missing a user notification after every game.
     *
     * Sometimes data-flow or UI problems rises from the development department!
     * (just because nobody is able to think on everything since the beginning!)
     */
    
    alert('your current wallet is of ' + wallet);
    
    if (userCanPlay(wallet)) {
        playLoop(wallet);
    } else {
        exitLooser();
    }
    
}



