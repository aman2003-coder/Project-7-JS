// Delay time in milliseconds (can be modified)
let delay = 3000;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Function to display the remaining time and generate the random number
function displayCountdownAndGenerateNumber(delay) {
  let remainingTime = delay / 1000; // Convert milliseconds to seconds

  let countdownInterval = setInterval(() => {
    if (remainingTime > 0) {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;
    } else {
      clearInterval(countdownInterval); // Clear the interval when the countdown is complete
      let randomNumber = generateRandomNumber();
      console.log(`Generated random number: ${randomNumber}`);
    }
  }, 1000); // Update every second
}

// Call the function
displayCountdownAndGenerateNumber(delay);
