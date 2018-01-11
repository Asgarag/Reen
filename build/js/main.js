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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gIHZhciBzbGlkZUluZGV4ID0gMTtcclxuICBzaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG4gIHZhciBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyX19zd2l0Y2gtcHJldicpO1xyXG4gIHZhciBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyX19zd2l0Y2gtbmV4dCcpO1xyXG4gIHByZXZbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gLTEpO1xyXG4gIH0pO1xyXG5cclxuICBuZXh0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IDEpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXJfX3NsaWRlJyk7XHJcblxyXG4gICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuIDwgMSkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfTtcclxufSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
