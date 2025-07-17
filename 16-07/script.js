// Que 1 :  Countdown Timer --------
// Create a countdown timer that: -> Starts from a given number (e.g., 10). -> Logs the countdown every second. -> Cancels the countdown if it reaches to 0.
// Requirements: -> Use setInterval() to decrement the timer every second. -> Use a clearInterval() to stop when the timer reaches 0. -> Implement a button to cancel the countdown using clearInterval(). 

const min = document.getElementById("min");
const sec = document.getElementById("sec");

let speed = 1000; // 1sec
let m = 5;
let s = 60;
let x;
function start() {
  clearInterval(x);
  x = setInterval(() => {
    s--;
    if (s == 0) {
      s = 60;
      m--;
    }
    min.textContent = m;
    sec.textContent = s;
  }, speed);
}

function stop() {
  clearInterval(x);
}



// ----------------------------------------------------------------------------------------------------------------------------------
// Que 2: Traffic Light Simulation -------
// Simulate a traffic light system where: -> The red light stays on for 3 seconds, yellow for 2 seconds, and green for 4 seconds. -> The sequence repeats indefinitely. -> Cancel the simulation after a set period (e.g., 15 seconds).
// Requirements: -> Use setTimeout() to switch between lights. -> Use if else with some flags to create a sequence of events. -> Use clearTimeout to stop the simulation after a specified time.
// Variables :
// 1. lightState to check current light – red , green, yellow
// 2. totalTime – changes every time when the cycle completes.
// 3. intervalId – store the setTimeout() to clear when reaches to max time.
// 4. nextDelay – updates everytime for particular light state.
// Note
// 1. Function turnoffAllLights() (user defined ) – change all div colors to gray.
// 2. Function changeLight() will call the turnoffAllLights() to get initial state and based on current light
// state changes the color using if else and backgroundColor in js
// 3. If timer reaches to 15 seconds stop the simulation.