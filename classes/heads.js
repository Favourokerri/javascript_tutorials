function flipCoin() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();
  
    // Use the random number to determine heads or tails
    var result = randomNum < 0.5 ? 'Heads' : 'Tails';
  
    // Return the result
    return result;
  }
  
  // Example usage
  var coinResult = flipCoin();
  console.log(coinResult);
  