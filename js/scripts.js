$(document).ready(function() {
  $('#questionaire form').submit(function(event) {
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
});
