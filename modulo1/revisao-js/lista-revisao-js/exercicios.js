// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 - PASSOU
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02 - PASSOU
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaArrayOrdenado(array) {
    return array.sort();
}

// EXERCÍCIO 04 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaNumerosPares(array) {
    const retornaPares = array.filter((numero) => { 
        return numero % 2 === 0;
    })
}

// EXERCÍCIO 05 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaNumerosParesElevadosADois(array) {
    const retornaParesElevado = array.filter((numero) => { 
        return (numero % 2 === 0) **2 
    })
}

// EXERCÍCIO 06 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaMaiorNumero(array) {
    return Math.max(...array);
}

// EXERCÍCIO 07 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2);
    let menorNumero = Math.min(num1, num2);
    let maiorDivisivelPorMenor = maiorNumero / menorNumero >= 0;
    let diferenca = maiorNumero - menorNumero;
    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaNPrimeirosPares(n) {
    let pares = [];
    for (let i = 0; i <= n; i+1){
        if  (i % 2 === 0){
            pares.push(i)
        }
    }
   return pares;
}

// EXERCÍCIO 09 - NÃO PASSOU NO TESTE 
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB == ladoC){
        return "Equilátero"
    }else if(ladoA < ladoB, ladoB < ladoC){
        return "Escaleno"
    }else{
        return "Isóceles"
    }

}

// EXERCÍCIO 10 - NÃO PASSOU NO TESTE / Não está certo mesmo, mas não imagino como fazer
function retornaSegundoMaiorESegundoMenor(array) {
    let segundoMaior = Math.max(...array)
    let segundoMenor = Math.min(...array)
    return segundoMaior, segundoMenor  
}

// EXERCÍCIO 11 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaChamadaDeFilme(filme) {
    return `Venha assistir o filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]} e ${filme.atores[3]}.`
}

// EXERCÍCIO 12 - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaPessoaAnonimizada(pessoa) {
    const pessoa = {
        nome: "Astrodev",
        idade: 25,
        email: "astrodev@labenu.com.br",
        endereço: "Rua do Futuro, 4"
    }
    
    const pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO",
        idade: 25,
        email: "astrodev@labenu.com.br",
        endereço: "Rua do Futuro, 4"
    }
    
    return pessoaAnonima
}

// EXERCÍCIO 13A - NÃO PASSOU NO TESTE / MAS PASSOU NO MEU
function retornaPessoasAutorizadas(pessoas) {
    const arrayAutorizadas = pessoas.filter((pessoa) => {
        pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5 
    })    
        return arrayAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const arrayNaoAutorizadas = pessoas.filter((pessoa) => {
        pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5 ;
    })
        return arrayNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return (a.nome < b.nome)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
}