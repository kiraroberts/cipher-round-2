$(document).ready(function() {
  var inputtedSentence = prompt("Enter a sentence.");

  var firstLetter = function(inputtedSentence) {
      var firstCapital = inputtedSentence.charAt(0);
      var first = firstCapital.toUpperCase();
      return first;
  };
  // console.log(firstLetter(inputtedSentence));

  // var lastLetter = function(inputtedSentence) {
  //   return inputtedSentence.length;
  // };

  var capLast = function(x, y) {
    var last = x.charAt(y.length -1);
    var capital = last.toUpperCase();
    return capital;
  }

  var firstLast = function(capLast, firstLetter) {
    return firstLetter(inputtedSentence) + capLast(inputtedSentence);
  }

  var lastFirst = function(capLast, firstLetter) {
    return inputtedSentence + capLast(inputtedSentence, inputtedSentence) + firstLetter(inputtedSentence);
  }

alert(lastFirst(capLast, firstLetter));
});
