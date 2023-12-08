let pointer = document.querySelector('.pointer')

let body = document.querySelector('body')

let links = document.querySelector("#sair")

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