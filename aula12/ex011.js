var idade = 17
if (idade < 16) {
    console.log(`Com ${idade} anos você não vota, QUE PENA!`)
}
else if(/*idade >= 16 &&*/ idade <18 || idade > 65) {
        console.log(`Com ${idade} anos o voto é opcional. Exerça seu Direito! #FORABOZO`)
    }
    else {
        console.log(`Com ${idade} anos seu voto é Obrigatório. #FORABOZO`)
    }