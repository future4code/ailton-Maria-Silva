// EXERCÍCIOS
// Exercício de interpretação de código
// Ex 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a)  O código verifica se o número é par ou ímpar, analisando o resto da divisão por 2. 

//b) Par

//c) Ímpar

// Ex 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para responder o preço da fruta escolhida pelo usuário.

//b) A mensagem impressa será "O preço da fruta Maçã, é RS 2.25".

//c) Ele imprimiria 5, pois o javascript considera a última linha como a atualização recente.

// Ex 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) Está pedindo um número pro usuário.

//b) 10 é maior que 0, então passou no teste, -10 é menor que zero, então não vai ter resposta.

//c) No código faltou um else para números menores que 0, então não tem resposta.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EX 1
// a)
let idade = prompt("Quantos anos você tem???")

//b)
let idadeDoUsuario = Number(idade)

//c)
if(idadeDoUsuario > 18) {
    console.log("Você pode dirigir!") 
}else{
    ("Você não pode dirigir")
}

// EX 2


let turnoDoAluno = prompt("Por favor digite a letra que representa seu turno: M (matutino), V (vespertino) ou N (noturno).");

const retornaMensagem = (turnoDoAluno) => {
    if(turnoDoAluno === "M") {
        return "Bom Dia!"
    }else if(turnoDoAluno ==="V") {
        return "Boa Tarde!"
    }else(turnoDoAluno === "N") 
    return "Boa Noite"
    }    

console.log(retornaMensagem(turnoDoAluno)); 


// EX 3

let turnoDoAluno = prompt("Por favor digite a letra que representa seu turno: M (matutino), V (vespertino) ou N (noturno).");

const retornaMensagem {
    switch turnos {
        case "M":
            return "Bom Dia!"
            break;
        case "V":
            return "Boa Tarde"
            break;
        case "N":
            return "Boa Noite"
        break
    }
    } 

console.log(retornaMensagem(turnoDoAluno)); 


// EX 4 


let filmeGenero = prompt("Qual gênero de filme você quer assistir?");

let precoIngresso = Number(prompt("Qual o valor do ingresso?"));
valorIngresso = (precoIngresso < 15);


if (filmeGenero === "fantasia" && valorIngresso){
    console.log("Bom Filme!")
}else{
    console.log("Escolha outro filme :(")
}


