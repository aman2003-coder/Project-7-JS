// Define the input string
let input = "example string";

// Function to reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to reverse the input string after a delay of 2 seconds
function reverseAfterDelay(input) {
  setTimeout(() => {
    let reversed = reverseString(input);
    console.log(reversed);
  }, 2000);
}

// Call the function
reverseAfterDelay(input);
