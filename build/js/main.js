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
(function(){
  const menu__switch = document.getElementsByClassName('header__menu-button');
  const menu__close = document.getElementsByClassName('page__sidebar-menu-button');
  const menu = document.getElementsByClassName('page__sidebar-menu-js');
  menu__switch[0].addEventListener("click", function(){
    menu[0].classList.toggle('page__sidebar-menu-js_active');
  });

  menu__close[0].addEventListener("click", function(){
    menu[0].classList.remove('page__sidebar-menu-js_active');
  });
})();
(function(){
  const search = document.getElementsByClassName('header__search-button-js');
  const cross = document.getElementsByClassName('header__search-button-cross-js');
  const form = document.getElementsByClassName('header__form-js');
  search[0].addEventListener("click", function(){
    form[0].classList.add('header__form-js_active');
    cross[0].classList.add('header__search-button-cross-js_active');
    search[0].classList.add('header__search-button-js_disable');
  });

  cross[0].addEventListener("click", function(){
    form[0].classList.remove('header__form-js_active');
    search[0].classList.remove('header__search-button-js_disable');
    cross[0].classList.remove('header__search-button-cross-js_active');
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aWV3X19zd2l0Y2gtcHJldicpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aWV3X19zd2l0Y2gtbmV4dCcpO1xyXG4gIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aWV3X19kb3QtanMnKTtcclxuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aWV3X19zbGlkZS1qcycpO1xyXG4gIGxldCBzbGlkZUluZGV4ID0gMTtcclxuICBzaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG4gIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxuICAgIH0sIDUwMDApO1xyXG5cclxuICBwcmV2WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IC0xKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IDEpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICB9KTtcclxuXHJcbiAgbmV4dFswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IDEpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkb3RzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBpKzEpO1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gMSk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobiA8IDEpIHtcclxuICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNsaWRlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdwcmV2aWV3X19zbGlkZS1qc19hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncHJldmlld19fZG90LWpzX2FjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZXNbc2xpZGVJbmRleC0xXS5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3X19zbGlkZS1qc19hY3RpdmUnKTtcclxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3X19kb3QtanNfYWN0aXZlJyk7XHJcbiAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3Qtd29ya3NfX3N3aXRjaC1wcmV2Jyk7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3Qtd29ya3NfX3N3aXRjaC1uZXh0Jyk7XHJcbiAgY29uc3QgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3Qtd29ya3NfX2RvdC1qcycpO1xyXG4gIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3Qtd29ya3NfX3NsaWRlLWpzJyk7XHJcbiAgbGV0IHNsaWRlSW5kZXggPSAxO1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCk7XHJcbiAgcHJldlswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAtMSk7XHJcbiAgfSk7XHJcblxyXG4gIG5leHRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gMSk7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gaSsxKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgc2xpZGVJbmRleCA9IDE7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChuIDwgMSkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2xhc3Qtd29ya3NfX3NsaWRlLWpzX2FjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdsYXN0LXdvcmtzX19kb3QtanNfYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ2xhc3Qtd29ya3NfX3NsaWRlLWpzX2FjdGl2ZScpO1xyXG4gICAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ2xhc3Qtd29ya3NfX2RvdC1qc19hY3RpdmUnKTtcclxuICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtcclxuICBjb25zdCBtZW51X19zd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX21lbnUtYnV0dG9uJyk7XHJcbiAgY29uc3QgbWVudV9fY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlX19zaWRlYmFyLW1lbnUtYnV0dG9uJyk7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2VfX3NpZGViYXItbWVudS1qcycpO1xyXG4gIG1lbnVfX3N3aXRjaFswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIG1lbnVbMF0uY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9fc2lkZWJhci1tZW51LWpzX2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICBtZW51X19jbG9zZVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIG1lbnVbMF0uY2xhc3NMaXN0LnJlbW92ZSgncGFnZV9fc2lkZWJhci1tZW51LWpzX2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtcclxuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX3NlYXJjaC1idXR0b24tanMnKTtcclxuICBjb25zdCBjcm9zcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fc2VhcmNoLWJ1dHRvbi1jcm9zcy1qcycpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX2Zvcm0tanMnKTtcclxuICBzZWFyY2hbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBmb3JtWzBdLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fZm9ybS1qc19hY3RpdmUnKTtcclxuICAgIGNyb3NzWzBdLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLWJ1dHRvbi1jcm9zcy1qc19hY3RpdmUnKTtcclxuICAgIHNlYXJjaFswXS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3NlYXJjaC1idXR0b24tanNfZGlzYWJsZScpO1xyXG4gIH0pO1xyXG5cclxuICBjcm9zc1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIGZvcm1bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19mb3JtLWpzX2FjdGl2ZScpO1xyXG4gICAgc2VhcmNoWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWJ1dHRvbi1qc19kaXNhYmxlJyk7XHJcbiAgICBjcm9zc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3NlYXJjaC1idXR0b24tY3Jvc3MtanNfYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pKCk7Il0sImZpbGUiOiJtYWluLmpzIn0=
