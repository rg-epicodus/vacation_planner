$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var cityInput= $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var phoneInput = $("input#phone").val();
    var emailInput = $("input#email").val();

    var a = parseInt($("input:radio[name=biome]:checked").val());
    var b = parseInt($("input:radio[name=budget]:checked").val());
    var c = parseInt($("input:radio[name=activity]:checked").val());
    var d = parseInt($("input:radio[name=population]:checked").val());
    var e = parseInt($("input:radio[name=epicurious]:checked").val());

    var destResult = a+b+c+d+e;

    if (destResult >= 5 && destResult <= 9) {
      $("#v02, #v03, #v04, #v05").addClass("hidden");
      $("#v01").removeClass("hidden");
    } else if (destResult >= 10 && destResult <= 14) {
      $("#v01, #v03, #v04, #v05").addClass("hidden");
      $("#v02").removeClass("hidden");
    } else if (destResult >= 15 && destResult <= 19) {
      $("#v02, #v01, #v04, #v05").addClass("hidden");
      $("#v03").removeClass("hidden");
    } else if (destResult >= 20 && destResult <= 24) {
      $("#v02, #v03, #v01, #v05").addClass("hidden");
      $("#v04").removeClass("hidden");
    } else if (destResult >= 25) {
      $("#v02, #v03, #v04, #v01").addClass("hidden");
      $("#v05").removeClass("hidden");
    } else {
      alert("ERROR")
    }

    $(".name").text(nameInput);

    event.preventDefault();
  });

});

















// // $(document).ready(function() {
// //   $("#mainPageSubmit").click(function(event) {
// //     $("#mainPage").addClass("hidden");
// //     $("#persInfo").removeClass("hidden");
// //
// //     event.preventDefault();
// //   });
// //
// //   $("#persInfoSubmit").click(function(event) {
// //     $("#persInfo").addClass("hidden");
// //     $("#biome").removeClass("hidden");
// //
// //     event.preventDefault();
// //   });
// //
// //   $("#biomeSubmit").click(function(event) {
// //     var biome
// //     $("#biome").addClass("hidden");
// //     $("#budget").removeClass("hidden");
// //
// //     event.preventDefault();
// //   });
// //
// //   $("#budgetSubmit").click(function(event) {
// //     $("#budget").addClass("hidden");
// //     $("#activity").removeClass("hidden");
// //
// //     event.preventDefault();
// //   });
// //
// //   $("#activitySubmit").click(function(event) {
// //     $("#activity").addClass("hidden");
// //     $("#popDensity").removeClass("hidden");
// //
// //     event.preventDefault();
// //   });
// //
// //   $("#popDensitySubmit").click(function(event) {
// //     $("#popDensity").addClass("hidden");
// //     $("#foodWine").removeClass("hidden");
// //
// //     event.preventDefault();
// //   });
// //
//   $("#foodWineSubmit").click(function(event) {
//     $("#foodWine").addClass("hidden");
//     $("#destination").removeClass("hidden");
//
//       var q1 = parseInt($("input:radio[name=biome]:checked").val());
//
//       var result = q1;
//
//       if (result >= 1) {
//         $("#vacation1").show();
//     } else {
//       alert("ERROR")
//     }
//
//     event.preventDefault();
//   });
//
// });
