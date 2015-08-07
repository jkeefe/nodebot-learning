var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  // establish button
  var button = new five.Button(2);
  
  // establish led
  var led = new five.Led(11);
  
  button.on("press", function() {
    led.on();
  });

  button.on("release", function(){
    led.off();
  });
  
});

