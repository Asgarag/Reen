(function(){
  const prev = document.getElementsByClassName('last-works__switch-prev');
  const next = document.getElementsByClassName('last-works__switch-next');
  const dots = document.getElementsByClassName('last-works__dot-js');
  const slides = document.getElementsByClassName('last-works__slide-js');
  let slideIndex = 1;
  showSlides(slideIndex);
  prev[0].addEventListener("click", function(){
    showSlides(slideIndex += -1);
  });

  next[0].addEventListener("click", function(){
    showSlides(slideIndex += 1);
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function(){
      showSlides(slideIndex = i+1);
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
      slides[i].classList.remove('last-works__slide-js_active');
    };

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('last-works__dot-js_active');
    };

    slides[slideIndex-1].classList.add('last-works__slide-js_active');
    dots[slideIndex-1].classList.add('last-works__dot-js_active');
  };
})();
