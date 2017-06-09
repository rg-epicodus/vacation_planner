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
    console.log('Success');

    event.preventDefault();
  });
});

$("#persInfo form").submit(function(event) {
var nameInput = $("input#name").val();
var streetInput = $("input#street").val();
var cityInput = $("input#city").val();
var stateInput = $("input#state").val();
var zipInput = $("input#zip").val();
var phoneInput = $("input#phone").val();
var emailInput = $("input#email").val();

$(".name").text(nameInput);
$(".street").text(streetInput);
$(".city").text(cityInput);
$(".state").text(stateInput);
$(".zip").text(zipInput);
$(".phone").text(phoneInput);
$(".email").text(emailInput);

$("#destination").show();

event.preventDefault();
});
