/**
 * CasinoJS - Exit Module
 * this file contains only functions which are used to communicate with the user
 * when he leave the casino.
 */

/**
 * This step is about basic UI so then we refactor those exit strategies
 * to loudly communicate with the user.
 */

function exitWithWallet(wallet) {
    
    console.log('<<< you leave the casino with a wallet of', wallet);
    
    alert(['Good Player!',
           'you leave CasinoJS with a wallet of ' + wallet
          ].join('\n'));
    
}


function exitNoMoney() {
    
    console.log('<<< you can\'t even start to play with no money!');
    
    alert(['you\'ve set up a wallet with Zero money!',
           'you can\'t even start to play with no money!'
          ].join('\n'));
    
}


function exitLooser() {
    
    console.log('<<< you have no money back you looser!');
    
    alert(['you have no more money!',
           'back you looser!'
          ].join('\n'));
    
}
