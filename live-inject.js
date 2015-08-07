// This program creates a kind of console you can do live

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  // Create and Led on Pin 11
  var led = new five.Led(11);

  // setting up the injection for console
  this.repl.inject({
    led: led
  });
  
});

/* In the console, you can now type:

> led.on();

> led.off();

> led.blink();

> led.stop();

> led.pulse();

*/


