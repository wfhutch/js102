

/*
  1. Create a new Github project named js102.
  2. Create a ~/workspace/js102 directory on your host machine.
  3. Initialize the ~/workspace/js102 directory as a git project and attach it to your js102 Github project.

  4. Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.
  5. Write a JavaScript function that accepts an array, and returns a new array that contains elements in the array you passed in that are larger than 25.
  
  6. Create a simple HTML form that has one input box and one button.
  7. Attach an event handler to the button click.
  8. When the button is clicked retrieve the value of the input box. You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).
  9. Convert that string of comma-delimited numbers into an array.
  10. Pass that array into the function that finds numbers higher than 25.
  11. The array that is the result of that, pass it into the function that sorts the array.
  12. Loop over the sorted array and create a DOM string that wraps a <div> element around each number (e.g. output += something).
  
  13. Give each <div> a class of "number".
  14. Write a CSS class that changes the font color of the even elements to red.
  15. Write a CSS class that changes the background color of the odd elements to azure.
  
  16. Push all of your code to Github.
  17. Send the link to your Github project to your assigned TA.
*/


var sortedArray = [];
var newNumArray = [];
var numbers;
var numbersArray = [];
var button = $("#button");
var contentEl = $("section");

function bigNumArray(array) {
  for (i=0; i<array.length; i++) {
    if (array[i] > 25) {
      newNumArray.push(array[i]);
      }
    }
    newNumArray.sort(sortedNumber); 
    console.log("Sorted big numbers", newNumArray);
    insertDiv(newNumArray);
  };

function sortedNumber(a,b){
  return a - b; 
}

function insertDiv(array) {
  for (i=0; i<array.length; i++) {
    var output = "";
    var current = array[i];
    output += "<div class='number'>";
    output += current;
    output += "</div>";
    contentEl.append(output);
  }
  contentEl.append("<div class='message'>Here are all the numbers over 25 in numeric order!</div>");
};

button.click(function() {
  numbers = $("#inputBox").val();
  numbersArray = numbers.split(',').map(Number);
  console.log("numArray", numbersArray);
  bigNumArray(numbersArray);
});




