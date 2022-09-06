let burger = document.querySelector('.header_right_burger');
let menu = document.querySelector('.header_wrapp_mobile_def');
let item = document.querySelectorAll('.heder_left_nav_li');
let close = document.querySelector('.close');


burger.addEventListener('click',
  function() {
    menu.classList.toggle('header_wrapp_mobile_act');
    burger.classList.toggle('header_right_burger_act');
    close.classList.toggle('close_act');
    document.body.classList.add('stop-scroll');
  }
)

item.forEach(function(el) {
  el.addEventListener('click',
  function() {
    burger.classList.remove('header_right_burger_act');
    menu.classList.remove('header_wrapp_mobile_act');
    document.body.classList.remove('stop-scroll');
})})