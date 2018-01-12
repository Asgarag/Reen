(function(){
  var prev = document.getElementsByClassName('preview__switch-prev');
  var next = document.getElementsByClassName('preview__switch-next');
  var dots = document.getElementsByClassName('preview__dot');
  var slides = document.getElementsByClassName('preview__slide');
  var slideIndex = 1;
  showSlides(slideIndex);
  /*var timerId = setInterval(function() {
      showSlides(slideIndex += 1);
    }, 3000);*/
  prev[0].addEventListener("click", function(){
    showSlides(slideIndex += -1);
  });

  next[0].addEventListener("click", function(){
    showSlides(slideIndex += 1);
  });

/*  dots[0].addEventListener("click", function(){
    showSlides(slideIndex = 1);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 3000);
  });

  dots[1].addEventListener("click", function(){
    showSlides(slideIndex = 2);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 3000);
  });

  dots[2].addEventListener("click", function(){
    showSlides(slideIndex = 3);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 3000);
  });

  dots[3].addEventListener("click", function(){
    showSlides(slideIndex = 4);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 3000);
  });

  dots[4].addEventListener("click", function(){
    showSlides(slideIndex = 5);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 3000);
  });
*/
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    };

    if (n < 1) {
      slideIndex = slides.length;
    };

    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('preview__slide_active');
    };

    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('preview__dot_active');
    };

    slides[slideIndex-1].classList.add('preview__slide_active');
    dots[slideIndex-1].classList.add('preview__dot_active');
  };
})();
