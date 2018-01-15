(function(){
  var prev = document.getElementsByClassName('preview__switch-prev');
  var next = document.getElementsByClassName('preview__switch-next');
  var dots = document.getElementsByClassName('preview__dot');
  var slides = document.getElementsByClassName('preview__slide');
  var slideIndex = 1;
  showSlides(slideIndex);
  var timerId = setInterval(function() {
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

  dots[0].addEventListener("click", function(){
    showSlides(slideIndex = 1);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

  dots[1].addEventListener("click", function(){
    showSlides(slideIndex = 2);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

  dots[2].addEventListener("click", function(){
    showSlides(slideIndex = 3);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

  dots[3].addEventListener("click", function(){
    showSlides(slideIndex = 4);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

  dots[4].addEventListener("click", function(){
    showSlides(slideIndex = 5);
    clearInterval(timerId);
    timerId = setInterval(function() {
        showSlides(slideIndex += 1);
      }, 5000);
  });

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
(function(){
  var menu__switch = document.getElementsByClassName('header__menu-button');
  var menu__close = document.getElementsByClassName('page__sidebar-menu-button');
  var menu = document.getElementsByClassName('page__sidebar-menu');
  menu__switch[0].addEventListener("click", function(){
    menu[0].classList.toggle('page__sidebar-menu_active');
  });

  menu__close[0].addEventListener("click", function(){
    menu[0].classList.remove('page__sidebar-menu_active');
  });
})();
(function(){
  var search = document.getElementsByClassName('header__search-button');
  var cross = document.getElementsByClassName('header__search-button-cross');
  var form = document.getElementsByClassName('header__form');
  search[0].addEventListener("click", function(){
    form[0].classList.add('header__form_active');
    cross[0].classList.add('header__search-button-cross_active');
    search[0].classList.add('header__search-button_disable');
  });

  cross[0].addEventListener("click", function(){
    form[0].classList.remove('header__form_active');
    search[0].classList.remove('header__search-button_disable');
    cross[0].classList.remove('header__search-button-cross_active');
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gIHZhciBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldmlld19fc3dpdGNoLXByZXYnKTtcclxuICB2YXIgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXZpZXdfX3N3aXRjaC1uZXh0Jyk7XHJcbiAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aWV3X19kb3QnKTtcclxuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldmlld19fc2xpZGUnKTtcclxuICB2YXIgc2xpZGVJbmRleCA9IDE7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuICB2YXIgdGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gMSk7XHJcbiAgICB9LCA1MDAwKTtcclxuXHJcbiAgcHJldlswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAtMSk7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgdGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIG5leHRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gMSk7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgdGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGRvdHNbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSAxKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IDEpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICB9KTtcclxuXHJcbiAgZG90c1sxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IDIpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gMSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gIH0pO1xyXG5cclxuICBkb3RzWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gMyk7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgdGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGRvdHNbM10uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSA0KTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IDEpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICB9KTtcclxuXHJcbiAgZG90c1s0XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IDUpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gMSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gMTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG4gPCAxKSB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzbGlkZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncHJldmlld19fc2xpZGVfYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXZpZXdfX2RvdF9hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uY2xhc3NMaXN0LmFkZCgncHJldmlld19fc2xpZGVfYWN0aXZlJyk7XHJcbiAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NMaXN0LmFkZCgncHJldmlld19fZG90X2FjdGl2ZScpO1xyXG4gIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe1xyXG4gIHZhciBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdC13b3Jrc19fc3dpdGNoLXByZXYnKTtcclxuICB2YXIgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3Qtd29ya3NfX3N3aXRjaC1uZXh0Jyk7XHJcbiAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0LXdvcmtzX19kb3QnKTtcclxuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdC13b3Jrc19fc2xpZGUnKTtcclxuICB2YXIgc2xpZGVJbmRleCA9IDE7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuICBwcmV2WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IC0xKTtcclxuICB9KTtcclxuXHJcbiAgbmV4dFswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxuICB9KTtcclxuXHJcbiAgZG90c1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IDEpO1xyXG4gIH0pO1xyXG5cclxuICBkb3RzWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gMik7XHJcbiAgfSk7XHJcblxyXG4gIGRvdHNbMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSAzKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgc2xpZGVJbmRleCA9IDE7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChuIDwgMSkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcclxuICAgIH07XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2xhc3Qtd29ya3NfX3NsaWRlX2FjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdsYXN0LXdvcmtzX19kb3RfYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ2xhc3Qtd29ya3NfX3NsaWRlX2FjdGl2ZScpO1xyXG4gICAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ2xhc3Qtd29ya3NfX2RvdF9hY3RpdmUnKTtcclxuICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtcclxuICB2YXIgbWVudV9fc3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19tZW51LWJ1dHRvbicpO1xyXG4gIHZhciBtZW51X19jbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2VfX3NpZGViYXItbWVudS1idXR0b24nKTtcclxuICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2VfX3NpZGViYXItbWVudScpO1xyXG4gIG1lbnVfX3N3aXRjaFswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIG1lbnVbMF0uY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9fc2lkZWJhci1tZW51X2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICBtZW51X19jbG9zZVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIG1lbnVbMF0uY2xhc3NMaXN0LnJlbW92ZSgncGFnZV9fc2lkZWJhci1tZW51X2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtcclxuICB2YXIgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19zZWFyY2gtYnV0dG9uJyk7XHJcbiAgdmFyIGNyb3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19zZWFyY2gtYnV0dG9uLWNyb3NzJyk7XHJcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX2Zvcm0nKTtcclxuICBzZWFyY2hbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBmb3JtWzBdLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fZm9ybV9hY3RpdmUnKTtcclxuICAgIGNyb3NzWzBdLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLWJ1dHRvbi1jcm9zc19hY3RpdmUnKTtcclxuICAgIHNlYXJjaFswXS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3NlYXJjaC1idXR0b25fZGlzYWJsZScpO1xyXG4gIH0pO1xyXG5cclxuICBjcm9zc1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIGZvcm1bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19mb3JtX2FjdGl2ZScpO1xyXG4gICAgc2VhcmNoWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWJ1dHRvbl9kaXNhYmxlJyk7XHJcbiAgICBjcm9zc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3NlYXJjaC1idXR0b24tY3Jvc3NfYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pKCk7Il0sImZpbGUiOiJtYWluLmpzIn0=
