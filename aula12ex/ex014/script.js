function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 14//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`   
    if (hora >= 0 && hora < 12) {
    //Bom dia    
    img.src = '_imagens/manha.png'
    document.body.style.background = '#FB8923'
    } 
    else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = '_imagens/tarde.png'
        document.body.style.background = '#CE8677'

    }
    else {
        // Boa noite
        img.src = '_imagens/noite.png'
        document.body.style.background = '#4C3C60'

    }
}

