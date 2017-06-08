$(document).ready(function() {
  $("#mainPageSubmit").click(function(event) {
    $("#mainPage").addClass("hidden");
    $("#persInfo").removeClass("hidden");

    event.preventDefault();
  });

  $("#persInfoSubmit").click(function(event) {
    $("#persInfo").addClass("hidden");
    $("#biome").removeClass("hidden");

    event.preventDefault();
  });

  $("#biomeSubmit").click(function(event) {
    $("#biome").addClass("hidden");
    $("#budget").removeClass("hidden");

    event.preventDefault();
  });

  $("#budgetSubmit").click(function(event) {
    $("#budget").addClass("hidden");
    $("#activity").removeClass("hidden");

    event.preventDefault();
  });

  $("#activitySubmit").click(function(event) {
    $("#activity").addClass("hidden");
    $("#popDensity").removeClass("hidden");

    event.preventDefault();
  });

  $("#popDensitySubmit").click(function(event) {
    $("#popDensity").addClass("hidden");
    $("#foodWine").removeClass("hidden");

    event.preventDefault();
  });

  $("#foodWineSubmit").click(function(event) {
    $("#foodWine").addClass("hidden");
    $("#destination").removeClass("hidden");

    event.preventDefault();
  });
});
