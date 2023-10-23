/* 
 * filename: complexCode.js
 * 
 * This code demonstrates a sophisticated and elaborate JavaScript program.
 * It involves multiple classes, complex algorithms, and incorporates various features and techniques.
 * The program simulates a virtual library management system.
 */

// Class representing a book
class Book {
  constructor(title, author, genre, pageCount) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.checkedOut = false;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Page Count: ${this.pageCount}`);
    console.log(`Status: ${this.checkedOut ? 'Checked Out' : 'Available'}`);
  }
}

// Class representing a library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  }

  findBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  displayAllBooks() {
    console.log(`Books in ${this.name}:`);
    this.books.forEach(book => book.displayInfo());
  }
}

// Utility function to generate a random book
function generateRandomBook() {
  const titles = ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice'];
  const authors = ['F. Scott Fitzgerald', 'Harper Lee', 'George Orwell', 'Jane Austen'];
  const genres = ['Fiction', 'Mystery', 'Sci-Fi', 'Romance'];
  const pageCount = Math.floor(Math.random() * 500) + 100;

  const title = titles[Math.floor(Math.random() * titles.length)];
  const author = authors[Math.floor(Math.random() * authors.length)];
  const genre = genres[Math.floor(Math.random() * genres.length)];

  return new Book(title, author, genre, pageCount);
}

// Main program
const library = new Library('My Library');

for (let i = 0; i < 10; i++) {
  const book = generateRandomBook();
  library.addBook(book);
}

const bookToFind = library.findBookByTitle('Pride and Prejudice');
if (bookToFind) {
  console.log(`Found book: ${bookToFind.title}`);
} else {
  console.log('Book not found.');
}

const booksByAuthor = library.findBooksByAuthor('George Orwell');
console.log(`Books by George Orwell:`);
booksByAuthor.forEach(book => console.log(book.title));

library.displayAllBooks();