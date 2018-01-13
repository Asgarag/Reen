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
