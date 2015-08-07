var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  // Create and Led on Pin 11
  var led = new five.Led(11);

  led.on();
  
});

