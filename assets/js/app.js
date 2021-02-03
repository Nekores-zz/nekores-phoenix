// Lazy Loader Script

document.addEventListener("DOMContentLoaded", function () {
  $(".lazy").lazy();
  $(".slick-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$(window).scroll(function () {
  var sticky = $(".navbar"),
    scroll = $(window).scrollTop();

  if (scroll >= 55) {
    // sticky.addClass("bg-light");
    sticky.addClass("navbar-light");
    sticky.removeClass("navbar-dark");
    $(".navbar-brand img").attr("src", "assets/img/logored.svg");
    sticky.addClass("fixed");
  } else {
    sticky.removeClass("fixed");
    sticky.addClass("navbar-dark");

    $(".navbar-brand img").attr("src", "assets/img/logo.svg");
  }
});
