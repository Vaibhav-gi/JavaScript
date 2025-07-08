// Ques 1 : Listing Products by Category (Array of Objects & .filter())

//   - Display only the products that belong to a specific category (like "Electronics" or "Clothing") from a list of products on an e-commerce site.

// Description :

//   In many online shopping platforms, users want to see only certain types of products, such as "Electronics" or "Clothing". This can be done by:

//   - Storing product details in an array of objects

//   - Using .filter() to extract matching products based on category

//   - Showing only the name and price of the filtered products

//   This exercise helps you learn how to filter an array of objects based on a property value.

// Steps :

//   - Define the list of all products

//   Each product is represented by an object with id, name, category, and price properties.

//   - Set the category you want to filter by

//   You can change this value based on what category the user wants to see.

//   - Use .filter() to get products of that category

//   .filter() returns a new array with only the items that match the condition.

//   - Check if any products were found

//   If no products are in that category, show a message.

// Constraints:

//   - Each product object must have a category property (string).

//   - The original products array should remain unchanged.

// Test Cases:

//   Input:

//   const allProducts = [

//   { id: 1, name: "Laptop", category: "Electronics", price: 1200 },

//   { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },

//   { id: 3, name: "Smartphone", category: "Electronics", price: 800 }

//   ];

//   targetCategory = "Electronics";

//   Expected Output:

//   Filtered Products in Electronics:

//   - Laptop ($1200)

//   - Smartphone ($800)

//   Input: allProducts (same as above), targetCategory = "Books"

//   Expected Output: "No products found in category: Books"


// JS Program :

const allProducts = [

    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },

    { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },

    { id: 3, name: "Smartphone", category: "Electronics", price: 800 }

    ];

    let targetCategory = "Toys";

let a =    allProducts.filter((ele)=>{
        return ele.category == targetCategory;
    })

    a.forEach((e)=>{
        console.log(`${(e.name)} \$ ${(e.price)}`);
    })
    if(a.length == 0){
        console.log(`No products found in category: ${targetCategory}`);
}

// =================================================================================================================================================================

// Ques 2 : Updating User Email (Array of Objects & .find())

//   You're an admin who needs to update a user's email. Given a user's id and a new email, your task is to find the user in the system and update their email directly within the existing array.

// Description :

//   In many systems, users are stored as objects in an array. Each user has properties like id, name, and email

//   We’ll use the .find() method to:

//   - Search for a user by their id

//   - If found, update their email field directly

//   - If not found, notify the admin

//   .find() returns the actual object, so updating it automatically updates the object inside the array.

// Steps:

//   - Define the Array of Users: Create an array where each element is a user object with id, name, and email properties.

//   - Find the User: Use the .find() method to locate the user object whose id matches the target ID.

//   - Update Email: If the user is found, update their email property with the new email address.

//   - Display Status: Log the original (or modified) array to show the change.

//   - use console.table() to print in the table format.

// Constraints:

//   - Each user object must have a unique id (number).

//   - The email property must be a string.

// Test Cases:

// Input:

//   const users = [

//   { id: 101, name: "Alice", email: "alice@example.com" },

//   { id: 102, name: "Bob", email: "bob@example.com" }

//   ];

//   targetId = 101;

//   newEmail = "alice.updated@example.com";

// Expected Output:

// User with ID 101's email is updated. The users array should reflect this change.

// Updated Users List:

// ┌─────────┬─────┬────────┬────────────────────────────┐

// │ (index) │ id │ name │ email │

// ├─────────┼─────┼────────┼────────────────────────────┤

// │ 0 │ 101 │ Alice │ 'alice.updated@example.com'│

// │ 1 │ 102 │ Bob │ 'bob@example.com' │

// └─────────┴─────┴────────┴────────────────────────────┘

//   Input: users (same as above), targetId = 999, newEmail = "nonexistent@example.com"

//   Expected Output: "User with ID 999 not found.".



// JS Program :
const users = [

        { id: 101, name: "Alice", email: "alice@example.com" },

        { id: 102, name: "Bob", email: "bob@example.com" }

        ];

        let targetId = 101;

        let newEmail = "alice.updated@example.com";


 let b = users.find((e)=>{
            return e.id == targetId
        })


        if(!b){
            console.table(`User with ID ${targetId} not found.`);
        }else{
            console.log(`before updating`);
            console.table(users);

            b.email = newEmail
            console.log(`after updating`);
            console.table(users);;
        }

// ==========================================================================================================================================

// Ques 3 : Sorting Users by Age (Array of Objects & .sort())

//   Given a list of users with their names and ages, sort the list in ascending order of age — from the youngest to oldest.

// Description :

//   In real applications like user directories or employee databases, you often need to sort users by a specific property such as age.

//   Here you will:

//   - Store each user as an object in an array

//   - Use .sort() with a custom compare function to order users by age

//   - Display the sorted users.

// Steps:

//   - Create an array where each element is a user object with name and age properties.

//   - Use the .sort() method, providing a compare function. The compare function should take two user objects (a, b) and return a.age - b.age for ascending order.

//   - Log the name and age of each user in the sorted array.

// Constraints:

//   - Each user object must have an age property (number).

//   - The .sort() method modifies the original array in place. If you need to preserve the original, make a shallow copy first (e.g., [...originalArray].sort()).

// Test Cases:

//   Input:

//   const users = [

//   { name: "Charlie", age: 35 },

//   { name: "Alice", age: 30 },

//   { name: "Bob", age: 28 }

//   ];

//   Expected Output:

//   Users Sorted by Age (Ascending):

//   - Bob (28)

//   - Alice (30)

//   - Charlie (35)

//   Input:

//   const users = [

//   { name: "David", age: 25 },

//   { name: "Eve", age: 25 },

//   { name: "Frank", age: 22 }

//   ];

//   Expected Output: Frank (22), then David (25) and Eve (25) in their original relative order.

// ===============================================================================================================================================================

// Ques 4 : Getting Names of Products Below a Price (Array of Objects & .filter(), .map())

//   - You are helping a customer find products under a given price. From a list of products, return only the names of the ones whose price is less than the given amount.

// Description :

//   - Use .filter() to select products below the given price

//   - Use .map() to get just the names of those products

//   This is a common pattern: filter → then map

// Steps:

//   - Create an array where each element is a product object with name and price properties.

//   - Get the maxPrice from the user as input using prompt() function.

//   - Use the .filter() method to select products whose price is less than the maxPrice.

//   - On the filtered array, use the .map() method to extract only the name of each product.

//   - Log the resulting array of product names.

// Constraints:

//   - Each product object must have a price property (number).

//   - The original products array should remain unchanged.

// Test Cases:

//   Input:

//   const products = [

//   { name: "Laptop", price: 1200 },

//   { name: "Mouse", price: 25 },

//   { name: "Keyboard", price: 80 },

//   { name: "Monitor", price: 300 }

//   ];

//   maxPrice = 100;

//   Expected Output: Products under your budget: ["Mouse", "Keyboard"]

//   Input: products (same as above), maxPrice = 20

//   Expected Output: No products found under that price.

// =====================================================================================================================================================================