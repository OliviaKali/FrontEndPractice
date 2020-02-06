// Write a JavaScript program to display the current day and time

// Write a JavaScript program to get the current date.

// Write a JavaScript program to calculate multiplication 
//and division of two numbers (input from user).

var num1;
var num2;

function multiply (num1, num2) {
    var result= num1 * num2;
    console.log(result);
    return result;
}

function divide (num1, num2) {
    var result = num1/num2;
    console.log(result);
    return result;
}


// Write a JavaScript program to get the website URL (loading page)

document.getElementById("websiteURL").innerHTML = 
"This Site's URL is: " + window.location.href;
// console.log(window.location.href);

// Write a JavaScript function that reverse a number 
function reverseNum(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseNum(123));
console.log(reverseNum(96525));

// Write a JavaScript function which will take an array of numbers 
//stored and find the second lowest 
//and second greatest numbers, respectively. 

// Write a JavaScript program to get the integers in range (x, y).

// Write a merge sort program in JavaScript.

// Write a JavaScript conditional statement to find the largest 
//of five numbers. Display an alert box to show the result. 

var n1;
var n2;
var n3;
var n4;
var n5;

function largestNum(n1, n2, n3, n4, n5)
{
    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 >n5) {
        window.alert( n1 + " is the largest number out of numbers: " 
        + n1 + ", " + n2 + ", "  + n3 + ", " + n4 + ", " + n5);
    }

    if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
        window.alert (n2 + " is the largest number out of numbers: " 
        + n1 + ", " + n2 + ", "  + n3 + ", " + n4 + ", " + n5)
    }

    if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
        window.alert( n3 + " is the largest number out of numbers: " 
        + n1 + ", " + n2 + ", "  + n3 + ", " + n4 + ", " + n5)
    }

    if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
        window.alert( n4 + " is the largest number out of numbers: " 
        + n1 + ", " + n2 + ", "  + n3 + ", " + n4 + ", " + n5)
    }

    if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
        window.alert( n5 + " is the largest number out of numbers: " 
        + n1 + ", " + n2 + ", "  + n3 + ", " + n4 + ", " + n5)
    }
    else {
        window.alert("Unable to find largest number");
    }
     }

     largestNum(2, 3, 4, 5, 1);
     largestNum(3, 6, 7, 2, 1)

// Write a JavaScript function to validate whether a given 
//value type is NaN or not.

// Write a JavaScript function to check whether given 
//value types are same or not.