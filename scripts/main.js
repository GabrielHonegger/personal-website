const hamburgerMenu = document.querySelector('.hamburger');
const menuItens = document.querySelector('.menu');
const hamburgerImage = document.querySelector('.hamburger-image');

let activeIcon = "/img/cardapio.png";

hamburgerMenu.addEventListener('click', () => {
    menuItens.classList.toggle('is-active');
    if (activeIcon === "/img/cardapio.png") {
        hamburgerImage.src = "/img/botao-fechar.png";
        activeIcon = "/img/botao-fechar.png";
    } else {
        hamburgerImage.src = "/img/cardapio.png";
        activeIcon = "/img/cardapio.png";
    }
})

function changeMenuState() {
    menuItens.classList.toggle('is-active');
    if (activeIcon === "/img/cardapio.png") {
        hamburgerImage.src = "/img/botao-fechar.png";
        activeIcon = "/img/botao-fechar.png";
    } else {
        hamburgerImage.src = "/img/cardapio.png";
        activeIcon = "/img/cardapio.png";
    }
}