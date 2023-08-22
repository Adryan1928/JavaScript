function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#E1DD5F'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#EAAA30'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#A15EF9'
    }
}