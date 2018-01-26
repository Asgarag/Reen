(function(){
  const prev = document.getElementsByClassName('preview__switch-prev');
  const next = document.getElementsByClassName('preview__switch-next');
  const dots = document.getElementsByClassName('preview__dot-js');
  const slides = document.getElementsByClassName('preview__slide-js');
  let slideIndex = 1;
  showSlides(slideIndex);
  let timerId = setInterval(function() {
      showSlides(slideIndex += 1);
    }, 5000);

  prev[0].addEventListener("click", function(){
    showSlides(slideIndex += -1);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

  next[0].addEventListener("click", function(){
    showSlides(slideIndex += 1);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function(){
      showSlides(slideIndex = i+1);
      clearInterval(timerId);
      timerId = setInterval(function() {
          showSlides(slideIndex += 1);
        }, 5000);
    });
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    };

    if (n < 1) {
      slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('preview__slide-js_active');
    };

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('preview__dot-js_active');
    };

    slides[slideIndex-1].classList.add('preview__slide-js_active');
    dots[slideIndex-1].classList.add('preview__dot-js_active');
  };
})();
