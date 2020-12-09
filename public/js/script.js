var isComplete = true;

//JQuery
$(document).ready(function () {
  
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });

  AOS.init({
    delay: 200,
    duration: 1200,
    once: false,
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

  // /*  En función del ancho de la pagina muestra o esconde el menu apenas cargue
  // *   seguro hay una mejor solucion, pero de momento funciona.
  // *   Tambien hay un error, simpre se muestra el menu en pantalla grande por un momento,
  // *   para luego desaparecer, queda feo y es muy molesto.
  // *   Igual al final rompio todo y lo saque todo
  // */
  // var width = $(window).width();
  // if (width <= 1024) {
  //   $("#btnSlideDown").show();
  // } else {
  //   $("#btnSlideDown").hide();
  // }

  // En función del tamaño de ventana, aparece el menu o no
  // $(window).resize(function () {
  //   var width = $(window).width();
  //   if (width <= 1024) {
  //     $("#btnSlideDown").show();
  //   }
  //   if (width >= 1024) {
  //     $("#btnSlideDown").hide();
  //   }
  // });

  // Tranformación de la hamburguesa en una X
  // $("#btnSlideDown").click(function () {
  //   $(".icon").toggleClass("close");
  // });
});
