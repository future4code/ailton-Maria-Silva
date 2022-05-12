//EXERCICIO INTERPRETAÇÃO DE CÓDIGO
// EX 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a)
// Dado um valor a variavel, ele vai multiplicar por 5,
// e esse valor será impresso mltuplicado primeiro por 2
// depois será impresso multiplicado por 10
//b)
// seria impresso da mesma forma

// EX 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// i. Eu gosto de cenoura - true, tem cenoura, e vai colocar tudo em caixa baixa.
// ii. CENOURA é bom pra vista - true - tem cenoura, e vai colocar a palavra cenoura em bcaixa baixa.
// iii. Cenouras crescem na terra - true - tem cenoura, e vai colocar a palavra cenoura em bcaixa baixa.

// EXERCICIO DE ESCRITA DE CÓDIGO

// EX 1

//a)
function pessoa() {
    alguem = "Eu sou a Carol, tenho 29 anos, moro em São Paulo e sou designer."
    return alguem
}

//b)
let nome = "Carol";
let idade = 29;
let endereço = "Santo André";
let profissao = "designer";

function pessoaDeNovo(nome, idade, endereço, profissao){
    aFulana = `Oi, eu sou a ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`
    return aFulana
}

// EX 2


//a)
let numero1 = 4;
let numero2 = 9;
function doisNume(numero1, numero2) {
    let soma = numero1 + numero2
    return soma
}

console.log(soma)


//b)
let numero3 = 9;
let numero4 = 3;
function doisNumRetorne(numero3, numero4){
    let retorneDiv = numero3 >= numero4
    return retorneDiv
}


//c)
let numero5 = 5;
function parOuImpar(numero5) {
    let verdadeiroOuFalso = numero5 % 2 === 0
    return verdadeiroOuFalso
}


//d)

let frase = "SOCORRO DEUS!";
function numeroDe (frase) {
    return frase.toUpperCase().length
}


// EX 3

let numeroUsuario = Number(prompt("Me diga um número?"));
let outroNumeroUsuario = Number(prompt("Agora outro número:"));

let num1 = numeroUsuario;
let num2 = outroNumeroUsuario;

function operacoesBasicas(somar, subtracao, multiplicacao, divisao){
    somar = num1 + num2;
    subtracao = num1 - num2;
    multiplicacao = num1 * num2;
    divisao =  num1 / num2;
    return somar, subtracao, multiplicacao, divisao
}

console.log(somar, subtracao, multiplicacao, divisao)

