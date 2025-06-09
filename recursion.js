// //Recursion example
// function countDown(count){
//     // display the current count
//     console.log(count);
//     // condition to stop recursion
//     if (count>=1){
//        count=count-1; // decrement the count
//        // call the function again
//        countDown(count); // recursive call
//     }
//     else{
//        return; // base case to stop recursion
//     }
//  } 
//  // Call the countdown function
//  countDown(1); // Start countdown from 5

//  function countsDown(count){
//     console.log(count);
//     if (count<=0 ){
//         console.log("Line Stopped");
//         return;
//     }
//     console.log(count);
//     countsDown(count - 1); // recursive call
//  }
// // Call the countsDown function
//  countsDown(3); // Start countdown from 5
 function countDown(number) {
    // Base Case: If the number is 0 or less, stop the recursion.
    if (number <= 0) {
        console.log("Blast off!");
        return; // Important to exit the function here!
    }
else{
     // Action for the current step
     console.log(number);

     // Recursive Step: Call the same function with a smaller number.
     countDown(number - 1);
 }
}
   

// Let's start the countdown
countDown(3);