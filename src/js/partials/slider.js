(function(){
  var slideIndex = 1;
  showSlides(slideIndex);
  var prev = document.getElementsByClassName('slider__switch-prev');
  var next = document.getElementsByClassName('slider__switch-next');
  prev[0].addEventListener("click", function(){
    showSlides(slideIndex += -1);
  });

  next[0].addEventListener("click", function(){
    showSlides(slideIndex += 1);
  });

  function showSlides(n) {
    var slides = document.getElementsByClassName('slider__slide');

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
  };
})();
