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
