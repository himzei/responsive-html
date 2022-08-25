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

  // slick - Review
  $(".review-slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // slick - mockup
  $(".mockup-slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Type It
  $("#typing").typeIt({
    strings: ["Business strategy.", "Innovation Plan", "Creative Idea"],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  // Wow Scroll Reveal Animation
  wow = new WOW({
    boxClass: "wow",
    offset: 150,
    mobile: true,
  });
  wow.init();
});

// FAQ Accordion
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .btn-top").addClass("active");
    } else {
      $("header, .btn-top").removeClass("active");
    }
  });
  // 처음시작하는 아코디언은 펼쳐라
  $(".faq-desc").eq(0).show();

  $(".faq-title").click(function () {
    // faq-title 클릭했을 때 다음에 있는 desc를 슬라이드 다운
    $(this).next().stop().slideDown();

    // faq-title 의 부모(parent) 형제(siblings[faq-item]) 그리고 아들(children)을 슬라이드 업
    $(this)
      .parent()
      .siblings(".faq-item")
      .children(".faq-desc")
      .stop()
      .slideUp();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
  });

  // video modal
  $(".open-modal").click(function () {
    $(".video-modal").fadeIn();
    $("body").addClass("active");
  });
  $(".close-modal").click(function () {
    $(".video-modal").fadeOut();
    $("body").removeClass("active");
  });
});
