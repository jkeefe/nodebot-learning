var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  // Create and Led on Pin 11
  var led = new five.Led(11);

  // default blink rate is 100ms
  // otherwise, values are ms
  led.blink(100); 
  
});

