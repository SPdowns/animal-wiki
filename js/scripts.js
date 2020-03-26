/*$(document).ready(function() {
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
}); */

$(document).ready(function() {
  $("#learnbutton").click(function() {
  var animal = $("#animalInput").val();
  $(".learn-more").hide();

  if (animal === "Lions") {
    $('#lion-showing').show();
  } else if (animal === "Bears") {
    $("#bear-showing").show();  
  } else if (animal === "Turtles") {
    $("#turtle-showing").show();
  }
});
});
