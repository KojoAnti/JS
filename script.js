
// function call
greeting(); 

// function declaration
function greeting() {
  console.log("Welcome to Programiz.");
}
"use strict"; // Enforce strict mode for better error checking
//Recursion example
function countDown(count){
   // display the current count
   console.log(count);
   // condition to stop recursion
   if (count>=1){
      count=count-1; // decrement the count
      // call the function again
      countDown(count); // recursive call
   }
   else{
      return; // base case to stop recursion
   }
} 
// Call the countdown function
countDown(1); // Start countdown from 5