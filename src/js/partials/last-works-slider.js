(function(){
  var prev = document.getElementsByClassName('last-works__switch-prev');
  var next = document.getElementsByClassName('last-works__switch-next');
  var dots = document.getElementsByClassName('last-works__dot');
  var slides = document.getElementsByClassName('last-works__slide');
  var slideIndex = 1;
  showSlides(slideIndex);
  prev[0].addEventListener("click", function(){
    showSlides(slideIndex += -1);
  });

  next[0].addEventListener("click", function(){
    showSlides(slideIndex += 1);
  });

  dots[0].addEventListener("click", function(){
    showSlides(slideIndex = 1);
  });

  dots[1].addEventListener("click", function(){
    showSlides(slideIndex = 2);
  });

  dots[2].addEventListener("click", function(){
    showSlides(slideIndex = 3);
  });

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    };

    if (n < 1) {
      slideIndex = slides.length;
    };

    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('last-works__slide_active');
    };

    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('last-works__dot_active');
    };

    slides[slideIndex-1].classList.add('last-works__slide_active');
    dots[slideIndex-1].classList.add('last-works__dot_active');
  };
})();
