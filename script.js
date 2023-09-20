let nav = document.querySelector('nav');
let burger = document.querySelector('.toggle');
let active = document.querySelector('ul');
burger.addEventListener('click', function () {
    active.classList.toggle ('active');
    nav.classList.toggle ('active');
});
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 1) {
      nav.style.background = ('#fff');
      nav.style.boxShadow = '0px 0 5px rgba(0, 0, 0, .2)';
    } else {
        nav.style.background = '';
        nav.style.boxShadow = '';
    }
  } 