// 1. Create an object named student with the specified keys and sample values.
const student ={
    name: "Kojo",
    rollNo: 12345,
    totalMarks: 40,
    /**
 * First function: Prints the information about the student.
 * @param {object} studentObject - The student object.
 */

    printStudentInfo: function() {
        console.log("--- Student Information ---");
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Total Marks: " + this.totalMarks);
        console.log("------------------------");
    },
   /**
 * Second function: Checks if the student passed the exam.
 * The passing mark is 40.
 * @param {object} studentObject - The student object.
 */
    printStudentmarks: function() {
        let passingMarks = 40;
        if(this.totalMarks >= passingMarks)
        console.log("Your Total Marks is: " + this.totalMarks + " You Passed");
    else
        console.log("Your Total Marks is: " + this.totalMarks + " You Failed");
    }
    
}
student.printStudentInfo(); // Call the first function to print the student's details
student.printStudentmarks(); // Call the second function to print the student's marks

//Testing Failing Student Logic
// --- Example with a failing grade to test the logic ---
const failingStudent ={
    name: "Ama",
    rollNo: 12323,
    totalMarks: 25,
};
console.log("\n--- Testing with another student ---");
student.printStudentInfo.call(failingStudent); 
student.printStudentmarks.call(failingStudent); // Reuse the method from student

