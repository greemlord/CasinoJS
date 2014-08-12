
/**
 * Simple Unit Test Utilities
 * ==========================
 *
 * This is an extremely simple unit test library which:
 * - silence the console during testing
 * - display console assertion fails messages
 * - provides a post-test logic execution
 *
 * You can use this library just while practice with Javascript but
 * you should move to a more robust system later on!
 * (KarmaRunner + MochaJS + ChaiJS + SinonJS is a good mix!)
 */

function startUnitTesting() {
    window.__consoleLog = console.log;
    console.log = function() {};
    
    window.__testsResult = true;
    window.__testsCount = 0;
    window.__testsSuccess = 0;
    window.__testsFailed = 0;
}

function stopUnitTesting(callback) {
    console.log = window.__consoleLog;
    callback(window.__testsResult, window.__testsCount, window.__testsSuccess, window.__testsFailed);
}

function assert(condition, message) {
    window.__testsCount++;
    if (condition) {
        window.__testsSuccess++;
    } else {
        window.__testsResult = false;
        window.__testsFailed++;
        console.assert(condition, message);
    }
}
