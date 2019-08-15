$(function() {
  $("#submit").click(function(event) {
    var side1 = parseFloat($("input#validationServer01").val());
    var side2 = parseFloat($("input#validationServer02").val());
    var side3 = parseFloat($("input#validationServer03").val());

    $(".triangle").hide();
    $("#validationServer01").removeClass("is-invalid");
    $("#validationServer02").removeClass("is-invalid");
    $("#validationServer03").removeClass("is-invalid");

    if(side1 > 0 && side2 > 0 && side3 > 0) {
      if(side1 + side2 <= side3/2 || side1 + side3 <= side2/2 || side2 + side3 <= side1/2) {
        $("p#output").text("Oh no!");
      } else {
        if(side1 === side2 && side2 === side3) {
          $("p#output").text("equalateral");
          $("#equalateral").show();
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
          $("p#output").text("isosceles");
          $("#isosceles").show();
        } else {
          $("p#output").text("scalene");
          $("#scalene").show();
        }
      }
    } else {
      $("p#output").text("Triangle sides must be greater than 0");
      if(!side1 || side1 < 1) {
        $("#validationServer01").addClass("is-invalid");
      }
      if(!side2 || side2 < 1) {
        $("#validationServer02").addClass("is-invalid");
      }
      if(!side3 || side3 < 1) {
        $("#validationServer03").addClass("is-invalid");
      }

    }

    event.preventDefault();
  });
});
