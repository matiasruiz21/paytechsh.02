var isComplete = true;

$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });

  $("#btnSlideDown").click(function () {
    if (isComplete) {
      $("#box").slideDown(500, function () {
        isComplete = false;
      });
    } else {
      $("#box").slideUp(500, function () {
        isComplete = true;
      });
    }
  });

  $("#btnSlideDown").click(function () {
    $(".icon").toggleClass("close");
  });
});
