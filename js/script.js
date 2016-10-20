$(document).ready(function() {
  $("form").submit(function(event){
    //$("container").removeClass();
    //event.preventDefault();

  var social = $("#social").val();
  var economic = $("#economic").val();
  var age = parseInt($("input#age").val());

  // if (age =< 15) {
  //   $("#age").addClass(".has-error")
  //   alert("too young");
  // }

   if (social === "My way or death" && economic === "All mine" && (100 >= age, age >= 15)) {
     $(".solution").text("Flaming Anarchist")
     $('#results').show();
   } else if (social === "My way or death" && economic === "All yours"  && (100 >= age, age >= 15)) {
     $(".solution").text("Flaming communist")
     $('#results').show();
   } else if (social === "Your way or death" && economic === "All mine" && (100 >= age, age >= 15)) {
     $(".solution").text("Very confused")
     $('#results').show();
   } else if (social === "Your way or death" && economic === "All yours" && (100 >= age, age >= 15)) {
     $(".solution").text("Suicidal")
     $('#results').show();
   } else {
     alert("Enter age (must be 16 or older)!");
   }
   event.preventDefault();
   });
});
