import Nav from "./Nav.js";

const body = document.querySelector('body');
const links = document.querySelector("#sair");
const buttonToTopPage = document.querySelector('#btn-topo');
const menuMobile = document.querySelector('.overlay');
const buttonCloseNav = document.querySelector('.closebtn');
const buttonOpenNav = document.querySelector('.nav-mobile');
const nav = Nav({
    body,
    menuMobile
})


buttonCloseNav.addEventListener('click', nav.close);
buttonOpenNav.addEventListener('click', nav.open);

//Função para quando o usuario clicar no link do menu de mobile, o menu se fechar
links.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector('.overlay').style.width = "0%"
        body.style.overflowY = "scroll"
    }, 200)
})

//Função para quando o usuario estiver em um certo scroll da pagina, o botão de levar ao topo apareça
document.addEventListener('scroll', () => {
    let topo = scrollY

    if (topo < 200) {
        buttonToTopPage.style.right = '-100px'
    } else {
        buttonToTopPage.style.right = '10px'
    }
})

