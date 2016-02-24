$(document).ready(function() {
  var clickCount = 0;

  $("#waldo").click(function(event){
    var distance = getDistance(event, target);
    clickCount += 1;

    var getHint = function(distance) {
      switch (true) {
        case distance < 8:
          return("You found Waldo in " + clickCount + " clicks!");

        case distance < 15:
          return("Super boiling hot")
        case distance < 25:
          return("Boiling hot");

        case distance < 40:
          return("Hot");

        case distance < 80:
          return("Warm");

        case distance < 160:
          return("Cold");

        default:
          return("Freezing");
      }
    }
    var hintText = getHint(distance);
    flashHint(hintText)
  })

});
var target = { x:595, y:145 }

//uses the Pythagorean theorem to calculate the distance between two points
var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

var flashHint = function(message) {
  $("#hint").text(message);
}
