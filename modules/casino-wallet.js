/**
 * CasinoJS - Wallet Module
 * this file will contains only functions which are related to the wallet.
 * 
 */

function createTheWallet() {
    
    console.log('create the wallet');
    
    return 50;
}

function userCanPlay(wallet) {
    
    var result = wallet > 0;
    
    console.log('with a wallet of', wallet, 'userCanPlay return', result);
    
    return result;
}
