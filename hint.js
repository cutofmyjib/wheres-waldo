$(document).ready(function() {
  var clickCount = 0;

  $("#waldo").click(function(event){
    var distance = getDistance(event, target);
    clickCount += 1;

    var getHint = function(distance) {

      switch (true) {
        case distance < 8:
          return({message: "You found Waldo in " + clickCount + " clicks!", bg: "#1CC000"});
        case distance < 30:
          return({message: "Super boiling hot", bg: "#780116"})
        case distance < 50:
          return({message: "Boiling hot", bg: "#B70003"});

        case distance < 90:
          return({message: "Hot", bg: "#FF5900"});

        case distance < 180:
          return({message: "Warm", bg: "#FCBA04"});

        case distance < 250:
          return({message: "Cold", bg: "#007FFF"});

        default:
          background = 'freezing'
          return({message: "Freezing", bg: "#0B1D51"});
      }
    }
    var hintText = getHint(distance);
    showHint(hintText);
    var hideMessage = function() {
      $("#hint").text("");
      $(".hint-div").css("background", "none");
    }
    var hideHint = setTimeout(hideMessage, 500);
  })

});
var target = { x:595, y:145 }

//uses the Pythagorean theorem to calculate the distance between two points
var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

var showHint = function(hint) {
  $("#hint").text(hint.message);
  $(".hint-div").css("background", hint.bg);
}
