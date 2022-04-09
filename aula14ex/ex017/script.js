function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    }else {
        let n = Number (num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') // Comando que cria uma Option dentro do select do HTML
            item.text = `${n} x ${c} = ${n*c}` // Comando para mexer no text da var item, que é uma option
            item.value = `tab${c}`
            tab.appendChild(item) // Adicionar um apendice filho
            c++
        }
    }

}