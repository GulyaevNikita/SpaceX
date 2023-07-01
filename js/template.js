const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll('.menu__list-item')

burger.addEventListener("click",

  function () {
    document.body.classList.toggle("stop-scroll");
      
    burger.classList.toggle("burger_active");

    menu.classList.toggle("menu--active");

  }
);

menuLinks.forEach(item => {
  item.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('burger_active');
    menu.classList.remove('menu--active');
    menuLinks.classList.remove('menu__list-item--active');
  })
})