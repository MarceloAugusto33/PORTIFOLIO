import Nav from "./Nav.js"

const body = document.querySelector('body')
const links = document.querySelector("#sair")
const btnTopo = document.querySelector('#btn-topo')
const menuMobile = document.querySelector('.overlay');
const buttonCloseNav = document.querySelector('.closebtn');
const buttonOpenNav = document.querySelector('.nav-mobile');
const nav = Nav({
    body,
    menuMobile
})



buttonCloseNav.addEventListener('click', nav.close);
buttonOpenNav.addEventListener('click', nav.open);

links.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector('.overlay').style.width = "0%"
        body.style.overflowY = "scroll"
    }, 200)
})

document.addEventListener('scroll', () => {
    let topo = scrollY

    if (topo < 200) {
        btnTopo.style.right = '-100px'
    } else {
        btnTopo.style.right = '10px'
    }
})

