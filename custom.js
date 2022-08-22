$(function () {
  // Slick Slider
  $(".slideshow").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });

  // Type It
  $("#typing").typeIt({
    strings: ["Business strategy.", "Innovation Plan", "Creative Idea"],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });
});
