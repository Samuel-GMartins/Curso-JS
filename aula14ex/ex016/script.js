function verificar() {
    var inicio = document.getElementById('inicionum')
    var fim = document.getElementById('fimnum')
    var passonum = document.getElementById('passonum')
    var res = document.getElementById('res')
    var soma = 0

    for(var soma = inicio ; soma == fim; soma+inicio) {
        res.innerHTML = `${soma}`
    }

}