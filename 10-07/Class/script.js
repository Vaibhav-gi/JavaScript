//  Task1: copy of doyouwannagooutwithme and make it creative
//   eg:https://yashwelcome.netlify.app/ 



// Task2: make a div move left and right based on keys "G" and "H"

// JS Program :
const box = document.getElementById("box");

let val = 0;
const boxWidth = 200; // same as in CSS

window.addEventListener('keydown', (e) => {
    const screenWidth = window.innerWidth;

    if (e.key === 'g') {
        if (val + boxWidth + 20 <= screenWidth) {
            val += 20;
            box.style.left = `${val}px`;
        }
    }

    if (e.key === 'h') {
        if (val - 20 >= 0) {
            val -= 20;
            box.style.left = `${val}px`;
        }
    }
});
