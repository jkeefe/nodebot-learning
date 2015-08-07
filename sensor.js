var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  // establish button
  var rotary = new five.Sensor("A0");
  
  rotary.on("change", function() {
    console.log("Sensor changed!", this.value);
  });
  
});

