// Function to test the rollDice function
function testRollDice() {
    // Simulate rolling a dice with fixed values for testing
    const originalRandom = Math.random;
    Math.random = function() {
        return 0.5; // Always return 0.5 for testing purposes
    };

    // Test for Player 1 rolling a valid combination
    rollDice(1);
    console.assert(player1Score === 2, 'Player 1 should have a score of 2 after rolling (1,1)');

    // Test for Player 2 rolling an invalid combination
    rollDice(2);
    console.assert(player2Score === 0, 'Player 2 should have a score of 0 after rolling (1,2)');

    // Reset Math.random to its original function
    Math.random = originalRandom;
}

// Run the tests only if it's in a testing environment
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
    testRollDice();
}
