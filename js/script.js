$(document).ready(function() {
  $("form").submit(function(event){
    //$("container").removeClass();
    //event.preventDefault();

  var social = $("#social").val();
  var economic = $("#economic").val();

   if (social === "My way or death" && economic === "All mine") {
     $(".solution").text("Flaming Anarchist")
     $('#results').show();
   } else if (social === "My way or death" && economic === "All yours") {
     $(".solution").text("Flaming communist")
     $('#results').show();
   } else if (social === "Your way or death" && economic === "All mine") {
     $(".solution").text("Very confused")
     $('#results').show();
   } else {
     $(".solution").text("Suicidal")
     $('#results').show();
   }
   event.preventDefault();
   });
});
