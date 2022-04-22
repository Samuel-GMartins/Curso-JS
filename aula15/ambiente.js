let num = [5, 8, 2, 9, 3]
console.log(`O nosso vetor é o ${num}`)
num[5] = 6 // Coloque o numero '6' na posição 5
console.log(`O nosso vetor é o ${num}`)
num.push(7) // Comando coloca o numero '7' na ultima posição do Array
console.log(`O nosso vetor é o ${num}`)
console.log("O comprimento do Array é " + num.length) // Comando .length serve para medir o tamanho
console.log(`O array em ordem crescente é ${num.sort()}`) // Comando .sort() coloca o array em ordem crescente
console.log("E o primeiro elemento é o " + num[0])

console.log("-----+++++-----")
// -----+++++-----\\
//for(pos=0;pos<num.length;pos++){
//    console.log(`Posições ${pos} do vetor: ${num[pos]}`)
//}
//console.log("-----+++++-----")

for(let pos in num){ // para cada posição EM num
    console.log(`Posições ${pos} do vetor: ${num[pos]}`)
}
console.log("-----+++++-----")
console.log("Está na posição: " + num.indexOf(7)) // Mostra em qual posição está o numero 7 

let posi = num.indexOf(1)// não tendo o valor solicitado, retorna -1
if (posi == -1){
    console.log("Valor Não Encontrado")
} else{}
