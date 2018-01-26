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
