var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  // establish button
  var button = new five.Button(2);
  
  button.on("press", function() {
    console.log("Button Pressed!");
  });

  button.on("release", function(){
    console.log("Button Released!");
  });
  
});

