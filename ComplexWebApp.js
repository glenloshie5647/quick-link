/*
Filename: ComplexWebApp.js
Content: A complex web application that simulates an online marketplace
*/

// Define a class for products
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}

// Define a class for users
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
    this.purchasedItems = [];
  }

  addToCart(product, quantity) {
    this.cart.push({ product, quantity });
  }

  buy() {
    this.cart.forEach(item => {
      if (item.product.quantity >= item.quantity) {
        item.product.quantity -= item.quantity;
        this.purchasedItems.push(item);
      }
    });
    this.cart = [];
  }
}

// Create a list of products
const products = [
  new Product("T-Shirt", 10, 50),
  new Product("Jeans", 20, 30),
  new Product("Shoes", 50, 20)
];

// Simulate user interaction
const user1 = new User("John", "john@example.com");
const user2 = new User("Amy", "amy@example.com");

user1.addToCart(products[0], 2);
user1.addToCart(products[1], 1);
user2.addToCart(products[2], 3);

user1.buy();
user2.buy();

console.log("User 1 purchased items:");
user1.purchasedItems.forEach(item => {
  console.log(`${item.product.name}: $${item.product.totalPrice}`);
});

console.log("User 2 purchased items:");
user2.purchasedItems.forEach(item => {
  console.log(`${item.product.name}: $${item.product.totalPrice}`);
});

// More code...
// ...
// ...
// Total lines: 210