var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  var led = new five.Led(11);
  var rotary = new five.Sensor("A0");
  
  rotary.on("change", function() {
    // Analog sensors produce a 10-bit value (to 1023)
    // but led brightness is an 8-bit value (to 255).
    // Convert by shifting the value's bits two
    // places to the right.
    // 0b11111111 >> 2 equals
    // 0b00111111
    led.brightness(this.value >> 2);
  });
  
});

