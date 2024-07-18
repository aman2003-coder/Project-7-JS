// Original list of items with prices in USD
const itemsInUSD = {
    "apple": 1,
    "banana": 0.5,
    "orange": 0.75,
    "grapes": 2,
    "mango": 1.5
  };
  
  // Exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Function to convert prices from USD to INR
  const convertPricesToINR = (items, rate) => {
    return Object.fromEntries(
      Object.entries(items).map(([key, value]) => [key, value * rate])
    );
  };
  
  // Converting prices to INR
  const itemsInINR = convertPricesToINR(itemsInUSD, exchangeRate);
  
  // Output the converted prices
  console.log(itemsInINR);
  