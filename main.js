


  var newArray = [];
  var sortedArray = [];
  var newNumArray = [];

var sortArray = function (array) {
  for (i=0; i<array.length; i++) {
    newArray.push(array[i]);
    sortedArray = newArray.sort();
    return sortedArray;
   }
};

var numArray = function (array) {
  for (i=0; i<array.length; i++) {
    if ([i] > 25) {
      newNumArray.push(array[i]);
      return newNumArray;
    }
  }
};

var button = $("#button");

var numbers = $("#inputBox").val();
var bigNumbers = numbers.split();


button.click(function() {
  numArray(bigNumbers);
});

sortArray(newNumArray);


var contentEl = $("section");

for (i=0; i<sortedArray; i++) {
  var output = "";
  var current = sortedArray[i];
  output += "<div class='number'>";
  output += "current";
  output += "</div>";
  contentEl.append(output);

}




