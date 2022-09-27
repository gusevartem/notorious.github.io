// меню
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
    close.classList.remove('close_act');
    document.body.classList.remove('stop-scroll');
})});

// прокрутка якори
const anchors = document.querySelectorAll('.heder_left_nav_li_link_roadmap, .heder_left_nav_li_link_NFT')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}