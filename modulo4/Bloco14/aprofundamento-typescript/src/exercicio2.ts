// **Exercício 2** 

/*
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
*/

// a) as entradas são os números recebidos por parametro, e a saída é o resultado do objeto estatisticas retornado

function obterEstatisticas (numeros:any):any{
    const numerosOrdenados:Array<string> = numeros.sort(
        ( a:any , b:any ) => a - b
    )
    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    
    return estatisticas
}

// b) a variavel numerosOrdenados, que recebe um array ordenado e tem a tipagem Array<string>, pq ela disse que não fazer sort de number
// a variavel soma, que recebe o tipo number, e a variavel estatistica, que recebe um objeto com o resultado das outras variaveis, 

// c) tentei fazer com number, e ele não deixa, diz que precisa ser any 

type amostra ={
    numeros: any;
    obterEstatisticas: any
}