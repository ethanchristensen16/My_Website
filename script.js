// Greeting
let greeting = (new Date().getHours() < 12) 
  ? "Good morning!" 
  : "Good afternoon!";
document.getElementById("greeting").innerText = greeting;

// Date
document.getElementById("date").innerText = new Date().toLocaleString();