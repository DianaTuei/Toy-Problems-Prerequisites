// write a function to output grades based on marks 
function grade(){
    let inputMarks = prompt("Input student marks, it should be between 0 to 100");
    // define a variable that will convert marks to integers
    let marks = parseFloat(inputMarks);
    let grade;
    // create an if else statement to check conditions of marks and output the grade based on the marks
    if (marks > 79){
        grade = "A";
    } else if(marks >= 60){
        grade = "B";
    }else if(marks >= 50){
        grade = "C";
    }else if(marks >= 40){
        grade = "D";
    }else {
        grade = "E";
    }
    alert(`Your grade for ${marks} is: ${grade}`);
}
grade();