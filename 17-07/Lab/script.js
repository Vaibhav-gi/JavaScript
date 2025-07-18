// Ques 1:  
// Dynamic Progress Bar using setInterval(). ------------ - 
// Steps: - - - 
// Create a webpage that displays the loading screen while user visits the page and hide the loading 
// screen when it reaches to 100 and display welcome message to the user. 
// Create a html page with the  
// o Empty div container to display the progress bar  
// o Div that fills green color with the progress   
//  Ex. <div id=”progressContainer”>   <div id=”progressBar”> </div> </div> 
// o A div with welcome message that can be visible after the progress bar reach to 100. 
// Apply the css styles to the container to make it look like a progress bar. 
// In the javascript: 
// o Declare the progress variable that goes from 0 to 100 every 100 miliseconds. 
// o Declare the setInterval() and pass a callback that can be called every 100 miliseconds and 
// updates the progress variable by 1  
// o Increase the width of the progress bar div according to the progress variable. 
// o Also update the textcontent of the progress bar div to display the current progress. 
// o Once the progress variable reaches the 100 stop the interval using clearInterval() function. 
// o Once the interval is cleared change the display property of the welcome div to block and 
// progress container to none. 




// Ques 2 :  Basic data fetch simulation using Promise. -------------- 
// You are simulating a data fetch operation (like from a server). Write a function called fetchUserData() 
// that: 
// 1. Returns a Promise. 
// 2. The promise should: 
// o Resolve after 2 seconds with the message: "User data loaded successfully!" 
// o Reject if a variable shouldFail is set to true, with the error message: "Failed to load 
// user data." 
// 3. Call the function and use: 
// o .then() to handle success 
// o .catch() to handle errors 
// Steps:  
//  Promise creation (new Promise) 
//  resolve() and reject() 
//  setTimeout to simulate delay 
//  Handling with .then() and .catch() 
// Sample Input :  shouldFail = false: 
// Sample output : User data loaded successfully! 
// Sample Input : shouldFail = false: 
// Sample output : Failed to load user data. 