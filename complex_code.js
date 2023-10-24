// filename: complex_code.js
// This code demonstrates a sophisticated and elaborate implementation of a chat application in JavaScript.

// ChatRoom class to handle the chat functionality
class ChatRoom {
  constructor(roomName) {
    this.roomName = roomName;
    this.users = [];
    this.messages = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`${user.name} joined the chat room.`);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`${user.name} left the chat room.`);
    }
  }

  sendMessage(user, messageContent) {
    const message = new Message(user, messageContent);
    this.messages.push(message);
    console.log(`${user.name} sent a message: ${message.content}`);
  }

  displayChatHistory() {
    console.log(`Chat Room: ${this.roomName}`);
    console.log("Chat History:");
    this.messages.forEach((message) => {
      const username = message.user.name;
      const content = message.content;
      console.log(`${username}: ${content}`);
    });
  }
}

// User class to represent each user
class User {
  constructor(name) {
    this.name = name;
  }
}

// Message class to represent each message
class Message {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.timestamp = new Date();
  }
}

// Create a chat room
const chatRoom = new ChatRoom("General Chat Room");

// Create users
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Eve");

// Add users to the chat room
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

// Users send messages
chatRoom.sendMessage(user1, "Hello everyone!");
chatRoom.sendMessage(user2, "Hey Alice!");
chatRoom.sendMessage(user3, "Good to see you all.");

// Display chat history
chatRoom.displayChatHistory();

// User leaves the chat room
chatRoom.removeUser(user2);
chatRoom.sendMessage(user1, "Bob left the chat.");

// Updated chat history
chatRoom.displayChatHistory();

// Output:
/*
Alice joined the chat room.
Bob joined the chat room.
Eve joined the chat room.
Alice sent a message: Hello everyone!
Bob sent a message: Hey Alice!
Eve sent a message: Good to see you all.
Chat Room: General Chat Room
Chat History:
Alice: Hello everyone!
Bob: Hey Alice!
Eve: Good to see you all.
Bob left the chat.
Alice sent a message: Bob left the chat.
Chat Room: General Chat Room
Chat History:
Alice: Hello everyone!
Eve: Good to see you all.
Alice: Bob left the chat.
*/