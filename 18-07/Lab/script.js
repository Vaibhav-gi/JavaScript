// Ques  : Build a Live Random Quote Viewer using Fetch and setInterval 
// Create a visually appealing webpage that automatically fetches and displays a new random quote every 5 seconds 
// from the given API using fetch() and setInterval(). 
// Use the following API endpoint: 
// http://api.quotable.io/quotes/random?tags=technology,famous-quotes 
//   Your webpage should include: 
//  A Bootstrap card centered on the screen. 
//  The quote content displayed in large, readable text. 
//  The author's name shown beneath the quote. 
//  A smooth fade-in effect when each new quote appears. 
//  A unique background (gradient or image) for a visually appealing design. 
//   Fetch a new quote every 5 seconds using setInterval() and display it dynamically. 
//   Use only JavaScript with fetch().then() (do not use async/await). 
// Use following HTML and CSS for task 1: 
// <div class="container"> 
/* <div class="quote-card shadow-lg mx-auto" id="quoteCard"> 
<div class="quote-text" id="quoteText">Fetching a quote...</div> 
<div class="quote-author" id="quoteAuthor"></div> 
</div> 
</div> 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> 
<style> 
body { 
background: linear-gradient(to right, #c33764, #1d2671); 
color: #fff; 
height: 100vh; 
margin: 0; 
display: flex; 
justify-content: center; 
align-items: center; 
font-family: 'Segoe UI', sans-serif; 
} 
.quote-card { 
background-color: rgba(255, 255, 255, 0.1); 
border: 1px solid rgba(255, 255, 255, 0.2); 
border-radius: 1rem; 
padding: 2rem; 
max-width: 700px; 
text-align: center; 
backdrop-filter: blur(10px); 
opacity: 0; 
transition: opacity 0.6s ease-in-out; 
} 
.quote-card.show { 
opacity: 1; 
} 
.quote-text { 
font-size: 1.5rem; 
font-weight: 500; 
} 
.quote-author { 
margin-top: 1rem; 
font-style: italic; 
font-size: 1.1rem; 
} 
</style> 
*/