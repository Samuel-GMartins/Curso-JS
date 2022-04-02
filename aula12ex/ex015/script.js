function verificar() {
    var data = new Date()
    var tot = tot.getFullYear()
    var fano = document.getElementByI('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0) {
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        window.alert('Tudo ok!')
    }

}