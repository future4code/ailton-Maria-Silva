// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02 
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03 
function retornaArrayOrdenado(array) {
    if (a < b){
        return -1;
    } else if(a > b){
        return 1;
        }
        return 0;
    }
    return array.sort();

// EXERCÍCIO 04 
function retornaNumerosPares(array) {
    const retornaPares = array.filter((numero) => { 
        return numero % 2 === 0;
    })
}

// EXERCÍCIO 05 
function retornaNumerosParesElevadosADois(array) {
    const retornaParesElevado = array.filter((numero) => { 
        return (numero % 2 === 0) **2 
    })
}

// EXERCÍCIO 06 
function retornaMaiorNumero(array) {
    return Math.max(...array);
}

// EXERCÍCIO 07 
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2);
    let menorNumero = Math.min(num1, num2);
    let maiorDivisivelPorMenor = maiorNumero / menorNumero >= 0;
    let diferenca = maiorNumero - menorNumero;
    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08 
function retornaNPrimeirosPares(n) {
    let pares = [];
    for (let i = 0; i <= n; i+1){
        if  (i % 2 === 0){
            pares.push(i)
        }
    }
   return pares;
}

// EXERCÍCIO 09 
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB == ladoC){
        return "Equilátero"
    }if(ladoA < ladoB, ladoB < ladoC){
        return "Escaleno"
    }
        return "Isóceles"
    }



// EXERCÍCIO 10 
function retornaSegundoMaiorESegundoMenor(array) {
    let primeiroMaior = - Infinity;
    let segundoMaior = - Infinity;
    let primeiroMenor = + Infinity;
    let segundoMenor =  Infinity;

    for (let numero of array) {
        if (numero > primeiroMaior){
            primeiroMaior = numero
        }if ( numero < primeiroMenor){
                primeiroMenor = numero
            }
        }
        for (let numero of array){
            if (numero > segundoMaior && numero !== primeiroMaior){
                segundoMaior = numero
            }if (numero < segundoMenor && numero !== primeiroMenorr){
                segundoMenor = numero
            }
            }
        
        const arrayMaiorMenor = [segundoMaior, segundoMenor]
        return arrayMaiorMenor
    }
  


// EXERCÍCIO 11 
function retornaChamadaDeFilme(filme) {
    return `Venha assistir o filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]} e ${filme.atores[3]}.`
}

// EXERCÍCIO 12 
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

// EXERCÍCIO 13A 
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
    let compras = 

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return (a.nome < b.nome)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
}