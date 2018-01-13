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
