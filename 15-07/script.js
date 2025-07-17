// Ques 1: Detect key press (addEventListener, keydown) 
// Capture the keydown event using addEventListener in javascript and display the pressed key in the 
// paragraph tag. 
// Steps : 
// 1. Add Event Listener: Use the addEventListener() method on the document. 
// o The first argument is the event type string (e.g., 'keydown'). 
// o The second argument is the function to execute when the event occurs. 
// 2. Define Event Handler: Inside the function, use paragraph id to display the message. 
// Constraints: 
//  The paragraph must have a unique id. 
//  The paragraph should only appear when the key is pressed. ---------------------------------------------------------------------------------------------------------------------------------- 
// Ques 2: Input Character Counter (input ) 
// You have a textarea and a display area. Each time the user enter the text in textarea, you want to display the 
// current word count in the display area if user enters the word length more than 100 display a message in red 
// color “you reached a limit”. 
// Steps: 
// 1. Initialize Counter: Declare a variable WordCount and set it to 0. 
// 2. Get Elements: Select the textarea and the <span> for display. 
// 3. Add Click Listener: Attach a input event listener to the textarea. 
// 4. Define Event listener: 
// o Increment wordCount. 
// o Update the textContent of the display <span> with the new count. 
// Constraints: 
//  The counter should persist across multiple clicks. 
//  The display should update with each click. ---------------------------------------------------------------------------------------------------------------------------------- 
// Ques 3: Changing Input Text to Uppercase (input, value) 
// You have a text input field. As the user types into it, you want the text they are typing to automatically 
// convert to uppercase in real-time. 
// Description: This uses the input event, which fires immediately when the value of an <input> (or 
// <textarea>) element changes. We'll get the current value of the input and then reassign it back to the 
// input's value property after converting it to uppercase using toUpperCase(). 
// Steps : 
// 1. Get the Input Element: Select the input field by its ID. 
// 2. Add input Listener: Attach an addEventListener() for the 'input' event. 
// 3. Define Event Handler: 
// o Get the current value of the input (this.value or event.target.value). 
// o Convert the value to uppercase using .toUpperCase(). 
// o Assign the uppercase value back to inputElement.value. 
// o (Optional) Display the uppercase text in another element. 
// Constraints: 
//  The input must be a text-based input. 
//  Conversion should happen as the user types. ---------------------------------------------------------------------------------------------------------------------------------- 
// Ques 4: Realtime preview for textarea (input, value) 
// You have a textarea and a div. When the user enter a text into the textarea you have to display the text of the 
// value entered in textarea in the div. 
// Steps : 
// 1. Get Elements: Select the <textarea> and the <div> for displaying the selection. 
// 2. Add input Listener: Attach an addEventListener() for the 'input' event to the <textarea> 
// element. 
// 3. Define Event Handle: 
// o Get the selected option's value property (event.target.value). 
// o Get the selected textareas display text (event.target.value). 
// o Update the textContent of the display <div>. 
// Constraints: 
//  The textarea and div element must have an id. 
//  The display should update only after a text is entered. ---------------------------------------------------------------------------------------------------------------------------------- 