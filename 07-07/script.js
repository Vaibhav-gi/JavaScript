// Ques 1 : Storing User Profile Data
// ----------

// 	- You are building a simple user profile page. How would you store and display a user's name, age, and email address using JavaScript objects?

// Description : 
// 	- This scenario involves representing a single entity (a user) with multiple related pieces of information. A JavaScript object is ideal for this as it allows us to group key-value 	  pairs where each key represents a property (e.g., name) and its corresponding value holds the data (e.g., "Alice Smith").

// Steps :
// 	- Define the Object Structure: Create a JavaScript object with properties for name, age, and email.
// 	- Assign Values: Populate these properties with the user's data.
// 	- Access and Display: Retrieve the values from the object properties and display them.

// Constraints:

// 	- name must be a string.
// 	- age must be a number
// 	- email must be a string and should ideally be a valid email format.

// Test Cases:

// 	Input: name: "Alice Johnson", age: 30, email: "alice.johnson@example.com"
// 	Expected Output:  "Name: Alice Johnson", "Age: 30", "Email: alice.johnson@example.com"


// 	Input: name: "Bob Williams", age: 24, email: "bob.w@email.net"
// 	Expected Output:  "Name: Bob Williams", "Age: 24", "Email: bob.w@email.net"

// ================================================================================================================================

// Ques 2 : Describing a Single Product 
// --------
// 	- You're listing a single item for sale on an online marketplace. How would you store its essential details like name, price, and availability using JavaScript objects?

// Description :
// 	This scenario introduces the simplest form of an object: a single entity with a few descriptive properties. We'll focus purely on defining an object literal and accessing its 	properties.

// Steps :
// 	- Create the Product Object: Define a JavaScript object directly, using curly braces {}.
// 	- Add Properties: Inside the curly braces, add key-value pairs for name, price, and inStock.
// 	- Access Properties: Retrieve the values of these properties using dot notation (.) and display them.

// Constraints:

// 	- name must be a string.
// 	- price must be a number (can be a decimal).
// 	- inStock must be a boolean (true or false).

// Test Cases:

// 	Input: name: "Wireless Headphones", price: 79.99, inStock: true
// 	Expected Output: Display "Product: Wireless Headphones", "Price: $79.99", "Available: Yes"


// 	Input: name: "Mechanical Keyboard", price: 120.00, inStock: false
// 	Expected Output: Display "Product: Mechanical Keyboard", "Price: $120.00", "Available: No"

// ===================================================================================================================================

// Ques 3 : Representing a Book with an Author (Nested Object)
// --------
// 	You're building a simple library catalog. How would you store information about a book, including its title, ISBN, and publication year, but also details about its author, like 	their name and nationality?

// Description :
// 	This scenario introduces a nested object, where one object property's value is another object. This is incredibly common and useful for representing hierarchical or more complex 	relationships between data. Here, a book "has an" author, and that author has their own distinct properties.

// Steps:
// 	- Define the Author Object: Create a small object for the author with properties like authorName and nationality.
// 	- Define the Book Object: Create the main book object with properties like title, isbn, and publicationYear.
// 	- Nest the Author Object: Assign the author object created in step 1 as a property within the book object.
// 	- Access Nested Properties: Use dot notation multiple times (e.g., book.author.authorName) to access properties within the nested object.

// Constraints:

// 	- title and isbn must be strings.
// 	- publicationYear must be a number.
// 	- authorName and nationality must be strings.

// Test Cases:

// 	Input:  Book: title: "The Great Gatsby", isbn: "978-0743273565", publicationYear: 1925
// 		Author: authorName: "F. Scott Fitzgerald", nationality: "American"
// 	Expected Output: Display "Book: The Great Gatsby", "Author: F. Scott Fitzgerald", "Published: 1925 (American author)"



// 	Input:  Book: title: "1984", isbn: "978-0451524935", publicationYear: 1949
// 		Author: authorName: "George Orwell", nationality: "British"
// 	Expected Output: Display "Book: 1984", "Author: George Orwell", "Published: 1949 (British author)"

// ==========================================================================================================================================

// Ques 4 : Deleting User Preferences (Basic - Deleting Properties)
// --------
// 	A user has some saved preferences, like darkMode and emailNotifications. If they decide they no longer want emailNotifications, how would you remove that specific preference from 	their settings object?

// Description : 
// 	This scenario demonstrates how to delete properties from an object using the delete operator. This is useful when certain data or settings are no longer relevant or need to be 	explicitly removed from an object's structure.

// Steps :
// 	- Create the Preferences Object: Define an object with a few user preferences.
// 	- Delete a Property: Use the delete operator followed by the object and property name.
// 	- Verify Deletion: Log the object before and after deletion to confirm the property is gone.

// Constraints:
// 	- Properties can be of any type.
// 	- Only existing properties can be successfully deleted.

// Test Cases:

// 	Input: An object { darkMode: true, emailNotifications: true, locale: "en-US" }.
// 	Action: Delete emailNotifications.
// 	Expected Output: Object should be { darkMode: true, locale: "en-US" }.


// 	Input: An object { darkMode: false, locale: "en-US" }.
// 	Action: Delete smsNotifications.
// 	Expected Output: Object should remain { darkMode: false, locale: "en-US" }. (No error, just no change).