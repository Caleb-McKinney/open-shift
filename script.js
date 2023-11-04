'use strict'

console.log("hello world");

document.addEventListener("DOMContentLoaded", function() {
  // Get the .box element by its ID
  let box = document.getElementById("myBox");

  // Add a click event listener to change the background color
  box.addEventListener("click", function() {
    box.style.backgroundColor = "goldenrod";
  });
});
