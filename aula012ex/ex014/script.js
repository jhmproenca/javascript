function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >=0 && hora < 12) {
        //bom dia
        img.src = 'manhã.png'
        document.body.style.background = '#54b1f4'
    } else if (hora > 12 && hora <= 18) {
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#613336'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#815f92'
    }

}




