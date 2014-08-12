/**
 * CasinoJS - Exit Module
 * this file contains only functions which are used to communicate with the user
 * when he leave the casino.
 */


function exitWithWallet(wallet) {
    console.log('<<< you leave the casino with a wallet of', wallet);
}


function exitNoMoney() {
    console.log('<<< you can\'t even start to play with no money!');
}


function exitLooser() {
    console.log('<<< you have no money back you looser!');
}
