function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade <13) {
                genero = 'Um Menino'
                //Criança
                img.setAttribute('src','_imagens/criancama.jpg')
            } else if (idade < 21) {
                genero = 'Um homem jovem'
                //jovem
                img.setAttribute('src','_imagens/menino.jpg')

            } else if (idade < 50) {
                genero = 'Um homem Adulto'
                //Adulto
                img.setAttribute('src','_imagens/homem.jpg')

            } else {
                genero = 'Um Homem Idoso'
                //Idoso
                img.setAttribute('src','_imagens/vovo.jpg')

            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <13) {
                genero = 'Uma Menina'

                //Criança
                img.setAttribute('src','_imagens/crianca.jpg')

            } else if (idade < 21) {
                genero = 'Uma Mulher Jovem'

                //jovem
                img.setAttribute('src','_imagens/menina.jpg')

            } else if (idade < 50) {
                genero = 'Uma Mulher Adulta'
                //Adulto
                img.setAttribute('src','_imagens/mulher.jpg')

            } else {
                genero = 'Uma Mulher Idosa'
                //Idoso
                img.setAttribute('src','_imagens/vo.jpg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}