// Function to validate URL
const validateURL = (url) => {
    // Regular expression to match valid URLs
    const urlRegex = /^(https?:\/\/[a-zA-Z0-9\-_~!$&'()*+,;=]+(\.[a-zA-Z0-9\-_~!$&'()*+,;=]+)+)$/;
  
    // Test the URL against the regex
    if (urlRegex.test(url)) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is not valid.");
    }
  };
  
  // Sample URLs for testing
  const testUrls = [
    "http://example.com",
    "https://example.com",
    "http://example-site.com",
    "https://sub.example.co.in",
    "ftp://invalid-url.com",
    "http://invalid-url",
    "http://example.123"
  ];
  
  // Validate each URL
  testUrls.forEach(url => validateURL(url));
  