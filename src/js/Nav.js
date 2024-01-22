//Função de abrir o menu mobile

export default function Nav({
    body,
    menuMobile
}) { 
    function open(){
        menuMobile.style.width = "70%"
        body.style.overflowY = "hidden"
    }
    function close(){
        menuMobile.style.width = "0%"
        body.style.overflowY = "scroll"
    }

    return {
        close,
        open
    }
}