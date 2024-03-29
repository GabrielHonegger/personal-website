const hamburgerMenu = document.querySelector('.hamburger');
const menuItens = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    menuItens.classList.toggle('is-active');
})