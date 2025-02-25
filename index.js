const fs = require("fs"); // File system module to write user data to a file
const validator = require("validator"); // Validator module for email validation
const { v4: uuidv4 } = require("uuid"); // UUID module for generating unique IDs

// Function to generate a unique ID
function generateUniqueID(firstName, lastName) {
    const firstLetter = firstName.charAt(0).toLowerCase(); // Get first letter of first name in lowercase
    const lastNameLower = lastName.toLowerCase(); // Convert last name to lowercase
    const uniqueStr = uuidv4().replace(/-/g, "").slice(0, 8); // Generate an 8-character alphanumeric unique string
    return `${firstLetter}${lastNameLower}${uniqueStr}`; // Combine elements to form unique ID
}

// Function to add an account to users.txt
function addAccount(userArray) {
    if (userArray.length !== 4) return false; // Ensure all fields are provided

    const [firstName, lastName, email, age] = userArray; // Destructure array into variables

    // Validate user input
    if (
        typeof firstName !== "string" || firstName.trim() === "" || // First name must be a non-empty string
        typeof lastName !== "string" || lastName.trim() === "" || // Last name must be a non-empty string
        typeof email !== "string" || !validator.isEmail(email) || // Email must be in a valid format
        typeof age !== "number" || age < 18 // Age must be a number and at least 18
    ) {
        return false; // Return false if any validation fails
    }

    const uniqueID = generateUniqueID(firstName, lastName); // Generate a unique ID for the user
    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`; // Format user data for file storage

    try {
        fs.appendFileSync("users.txt", userData, "utf8"); // Append user data to users.txt
        return true; // Return true if successfully saved
    } catch (error) {
        console.error("Error writing to file:", error); // Log error if file write fails
        return false; // Return false if an error occurs
    }
}

// Export functions for use in other files
module.exports = { generateUniqueID, addAccount };
