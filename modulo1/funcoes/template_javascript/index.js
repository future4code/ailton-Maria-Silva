//EXERCICIO INTERPRETAÇÃO DE CÓDIGO
// EX 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a)
// Dado um valor a variavel, ele vai multiplicar por 5,/      ERRADO
// e esse valor será impresso mltuplicado primeiro por 2/     ERRADO
// depois será impresso multiplicado por 10/                  ERRADO
// CORRETO, no primeiro ele vai ler o 2 como variavel dentro do parametro, e fazer 2 * 5,
//e imprimir 10 / no segundo ele vai ler como o valor variavel dentro do parametro e fazer 10 * 5, e imprimir 50

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
// ii. CENOURA é bom pra vista - true - tem cenoura, e vai colocar a palavra cenoura em caixa baixa.
// iii. Cenouras crescem na terra - true - tem cenoura, e vai colocar a palavra cenoura em caixa baixa.

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
//let numero1 = 4; ---ERRADO, quando fiz achava que tinha que colocar o número em uma variável antes da função
//let numero2 = 9; ---ERRADO
function doisNume(numero1, numero2) {
    let soma = numero1 + numero2
    return soma
}
//console.log(soma) ERRADO, quando fiz achei que pra ter o resultado esperado, tinha que imprimir o return, em vez de imprimir a função
console.log(doisNume(4, 9));


//b)
//let numero3 = 9;  ---ERRADO, quando fiz achava que tinha que colocar o número em uma variável antes da função
//let numero4 = 3;
function doisNumRetorne(numero3, numero4){
    let retorneDiv = numero3 >= numero4
    return retorneDiv
}


//c)
//let numero5 = 5;  ---ERRADO, quando fiz achava que tinha que colocar o número em uma variável antes da função
function parOuImpar(numero5) {
    let verdadeiroOuFalso = numero5 % 2 === 0
    return verdadeiroOuFalso
}


//d)

//let frase = "Socorro deus!"; ---ERRADO, quando fiz achava que tinha que colocar o número em uma variável antes da função
function numeroDe (frase) {
    return frase.length.toUpperCase()
}
console.log(numeroDe("Socorro deus!!!"));


// EX 3

/* ERRADO
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

console.log(somar, subtracao, multiplicacao, divisao) ---- ERRADO */


function somar (num1, num2) {
    return num1 + num2
}

function subtrair (num1, num2) {
    return num1 - num2
}

function multiplicar (num1, num2) {
    return num1 * num2
}

function dividir (num1, num2) {
    return num1 / num2
}

let numeroUsuario = Number(prompt("Me diga um número?"));
let outroNumeroUsuario = Number(prompt("Agora outro número:"));

let numero1 = numeroUsuario;
let numero2 = outroNumeroUsuario;

console.log(somar(numero1, numero2,), subtrair(numero1, numero2), multiplicar(numero1, numero2), dividir(numero1, numero2));
