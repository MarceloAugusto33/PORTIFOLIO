export default function Nav({
    body,
    menuMobile
}) { 
    function open(){
        menuMobile.style.width = "100%"
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