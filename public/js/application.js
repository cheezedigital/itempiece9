// if lasers are off, turn them on, if they're on, turn them off.
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

// when color button is clicked, pick a number 0-255
$(".color").click(function() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  //generate an RGBA from the three values red, green, and blue
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  //and change the body's background to our random color
  $("body").css("background", randomRGBA);
  //display the three values
  alert(randomRGBA);
});
