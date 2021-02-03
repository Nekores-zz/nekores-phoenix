// Lazy Loader Script
$(".lazy").lazy();

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Hero main slider Script
$(".hero-main-slider").slick({
  autoplay: true,
  infinite: true,
  lazyLoad: "ondemand",
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow: '<img src="assets/img/chevron.png" class="slick-prev"/>',
  nextArrow: '<img src="assets/img/chevron.png" class="slick-next"/>',
});

$(".playButton img").on("click", () => {
  $(".textArea").css({
    height: 0,
  });
  $("iframe").css({
    height: "100%",
  });
});

// Back to top script

$(window).scroll(function () {
  if ($(this).scrollTop() > 3700) {
    $("#backToTop").css({
      bottom: "5%",
    });
  } else {
    $("#backToTop").css({
      bottom: "-100%",
    });
  }
});
$("#backToTop").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return false;
});
let documentHeight = $(document).height();
$("#moveToBottom").click(function () {
  window.scrollTo({ top: documentHeight, behavior: "smooth" });
  return false;
});

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
