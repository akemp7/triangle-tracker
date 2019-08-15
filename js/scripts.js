$(function() {
  $("#submit").click(function(event) {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    //Math.max(side1, side2, side3);
    if(side1 + side2 <= side3/2 || side1 + side3 <= side2/2 || side2 + side3 <= side1/2) {
      $("p#output").text("Oh no!")
    } else {
      if(side1 === side2 && side2 === side3) {
        $("p#output").text("equalateral");
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        $("p#output").text("isosceles");
      } else {
        $("p#output").text("scalene");
      }

    }



    event.preventDefault();
  });
});
