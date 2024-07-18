// Sample list of books
const books = [
    { title: "Book One", author: "john doe", year: 2005 },
    { title: "Book Two", author: "jane smith", year: 2012 },
    { title: "Book Three", author: "susan clark", year: 2018 },
    { title: "Book Four", author: "michael brown", year: 2008 },
    { title: "Book Five", author: "lisa white", year: 2021 }
  ];
  
  // Function to capitalize author names
  const capitalizeAuthorName = (name) => {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Function to filter and transform the list of books
  const filterAndCapitalizeBooks = (books) => {
    return books
      .filter(book => book.year >= 2010)
      .map(book => ({
        title: book.title,
        author: capitalizeAuthorName(book.author),
        year: book.year
      }));
  };
  
  // Filter and capitalize books
  const updatedBooks = filterAndCapitalizeBooks(books);
  
  // Output the updated list of books
  console.log(updatedBooks);
  