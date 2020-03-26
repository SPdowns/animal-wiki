$(document).ready(function() {
  $(".clickable-turtle").click(function() {
    $("#bear-showing").fadeOut();
    $("#lion-showing").fadeOut();
    $("#turtle-showing").fadeToggle(); 
  });
  $(".clickable-lion").click(function() {
    $("#bear-showing").fadeOut();
    $("#turtle-showing").fadeOut();
    $("#lion-showing").fadeToggle(); 
  });
  $(".clickable-bear").click(function() {
    $("#turtle-showing").fadeOut();
    $("#lion-showing").fadeOut();
    $("#bear-showing").fadeToggle();
  });
});

  //var animal =(prompt("Which animal would you like to learn about? Turtles, Lions or Bears?"));

  if (animal === "turtle") {
    $('#turtle-showing').show();
  }
