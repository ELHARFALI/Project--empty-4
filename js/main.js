const menu = document.querySelector('.nav__menu');
const links = document.querySelector('.nav__links');


menu.addEventListener('click', function () {
    links.classList.toggle('active');
    menu.classList.toggle('menu-active')
})