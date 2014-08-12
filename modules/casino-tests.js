/**
 * CasinoJS - Test Module
 * this module is just a code organisation helper.
 *
 * it wraps all the unit tests into a single resposibility function so then
 * the `index.html` entry point keeps short and meaninful.
 */
function testCasinoJS() {
    
    assert(userCanPlay(100) === true, "user can play with a wallet of 100");
    assert(userCanPlay(0) === false, "user can't play with a wallet of 0");
    assert(userCanPlay(-100) === false, "user can't play with a wallet of -100");

    assert(checkWalletInput(0) === 0, "wallet can be a zero value");
    assert(checkWalletInput(1) === 1, "wallet can be a positive number");
    assert(checkWalletInput(NaN) === false, "wallet can't be a NaN");
    assert(checkWalletInput('string') === false, "wallet can't be a string");

    assert(isValidUserAction(null) === true, "null user action is ok");
    assert(isValidUserAction('test') === true, "TEST user action is ok");
    assert(isValidUserAction('aaa') === false, "AAA user action is NOT ok");

    assert(parseUserAction(null) === 'exit', "null should be parsed into exit");
    assert(parseUserAction('foo') === 'foo', "foo user action should return itself");

}