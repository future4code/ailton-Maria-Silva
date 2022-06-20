```let vezesQueAparece = 0

for (const numeroAparece of arrayDeNumeros){
    if (numeroAparece === numeroEscolhido){
        vezesQueAparece = vezesQueAparece++
    }
}
if (numeroAparece === 0){
    return `Número não encontrado`
}else{
    return `O número ${numeroEscolhido} aparece ${vezesQueAparece}`
}```