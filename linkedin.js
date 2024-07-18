// Function to validate LinkedIn profile URL
const validateLinkedInURL = (url) => {
    // Regular expression to match valid LinkedIn profile URLs
    const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the URL against the regex
    if (linkedInRegex.test(url))
  