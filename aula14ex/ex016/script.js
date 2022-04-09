function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[Erro] Faltam Dados !")
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1

        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) { // a variável vai começar no inicio e enquanto contador foir menor ou igual  ao fim, o contador vai receber ele mesmo mais o passo 
            res.innerHTML += `${c}\u{1f449} `
            }
        } else {
            //Contagem Regressiva
            for(var c = i; c >= f; c -= p) {
              res.innerHTML += `${c}\u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
