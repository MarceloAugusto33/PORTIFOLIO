let pointer = document.querySelector('.pointer')

let body = document.querySelector('body')

let links = document.querySelector("#sair")

let btnTopo = document.querySelector('#btn-topo')

function openNav(){
    document.querySelector('.overlay').style.width = "100%"
    body.style.overflowY = "hidden"
}
function closeNav(){
    document.querySelector('.overlay').style.width = "0%"
    body.style.overflowY = "scroll"
}

links.addEventListener('click',function(){
    setTimeout(function() {
        document.querySelector('.overlay').style.width = "0%"
        body.style.overflowY = "scroll"
    },200)
})

document.addEventListener('scroll', () => {
    let topo = scrollY

    if (topo < 200) {
        btnTopo.style.right = '-100px' 
    } else{
        btnTopo.style.right = '10px' 
    }
})