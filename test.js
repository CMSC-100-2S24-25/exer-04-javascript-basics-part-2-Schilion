const { generateUniqueID, addAccount } = require("./index"); // Import functions from index.js

// Test generateUniqueID function
console.log("Generated Unique ID:", generateUniqueID("Alan", "Turing")); // Expected format: "aturingXXXXXXXX" (where X is random)

// Test cases for addAccount function
console.log("Adding valid user:", addAccount(["Alan", "Turing", "aturing@w3c.com", 58])); // Expected: true
console.log("Adding user with invalid email:", addAccount(["John", "Doe", "invalid-email", 25])); // Expected: false
console.log("Adding user with missing last name:", addAccount(["Jane", "", "jane@example.com", 22])); // Expected: false
console.log("Adding underage user:", addAccount(["Mike", "Ross", "mike@example.com", 17])); // Expected: false

// Additional test cases
console.log("Adding user with spaces in name:", addAccount(["   ", "Doe", "doe@example.com", 25])); // Expected: false
console.log("Adding user with special characters in name:", addAccount(["J@ne", "D03", "janedoe@example.com", 30])); // Expected: true
console.log("Adding user with long name:", addAccount(["A".repeat(50), "B".repeat(50), "longname@example.com", 40])); // Expected: true
