// Question 1
const a = document.getElementById('welcome');

a.textContent = "Welcome to Hyderabad!!";

// Question 2
const b = document.getElementById('first');
b.addEventListener("click",function(){
    b.textContent = "Clicked"
})

// Question 3
const c = document.getElementById('second');
c.addEventListener("click",function(){
    document.body.style.background = "lightblue";
})

// Question 4
const button = document.getElementById("toggleButton");
const image = document.getElementById("myImage");

    // Apply CSS styles to the image using JavaScript
    image.style.width = "200px";
    image.style.height = "auto";
    image.style.marginTop = "20px";
    image.style.transition = "all 0.3s ease";

    // Toggle image display on button click
    button.addEventListener("click", () => {
      if (image.style.display === "none") {
        image.style.display = "block"; // show
      } else {
        image.style.display = "none";  // hide
      }
    });

// Question 5
    const listItems = document.getElementsByClassName("list-item");

    // Apply CSS to each list item using JavaScript
    for (const item of listItems) {
      item.style.color = "darkblue";
      item.style.fontSize = "18px";
      item.style.margin = "5px 0";
      item.style.fontFamily = "Arial, sans-serif";

    item.style.color = "darkblue";
    item.style.fontSize = "18px";
      // Log text content to console
      console.log(item.textContent);
    }


// Question 6

const paragraphs = document.querySelectorAll('p');

    // Step 2: Update text and apply CSS styles via JavaScript
    paragraphs.forEach(p => {
      // Update text
      p.textContent = "This paragraph has been updated!";

      // Apply CSS via JavaScript
      p.style.cssText = `
        color: darkgreen;
        font-size: 18px; `;
    });
    
