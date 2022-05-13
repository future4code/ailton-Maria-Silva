//EXERCICIO INTERPRETAÇÃO DE CÓDIGO
//EXERCICIO 1

/*AQUI COMEÇA
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);
//vai imprimir a. false, pois uma condição é false e a outra é true, e as duas precisam ser true

resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado)
//vai imprimir b. false, pois apesar de duas condições serem true, uma ainda é false, e todas precisam ser true

resultado = !resultado && (bool1 || bool2);
console.log("c. ", resultado);
// vai imprimir c .true, porque agora vai ler entre parenteses false ou true, que é true, pois || depende de um true para ser true
// e !resultado, lê se não false, que é true, então true && true é true

console.log("d. ", typeof resultado);
// vai imprimir que o tipo de resultado é boolean, pois se resultado recebe true ou false, é boolean
AQUI TERMINA*/

//EXERCICIO 2
/*AQUI COMEÇA
let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = primeiroNumero + segundoNumero;

console.log(soma);
//vai ler em string, porque prompt recebe valor em string

//EXERCICIO 3 - como resolver o problema do colega, pedir para que tranforme em Número o que for colocado no prompt
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;
console.log(soma);

//agora vai vai transformar string em número
AQUI TERMINA*/

//EXERCICIO DE ESCRITA DE CÓDIGO
// EXERCICIO 1
/*COMEÇA AQUI
let idadeUsuario = Number(prompt("Qual a sua idade?"));
let idadeAmigo = Number(prompt("Qual a idade dx seu/sua best?"));
const diferencaEntreIdades = idadeUsuario > idadeAmigo;
console.log("Sua idade é maior que a do seu amigo?", diferencaEntreIdades);

//EXERCICIO 2
let queAnoEstamos = Number(prompt("Que ano estamos?"));
const respostaPar = queAnoEstamos % 2;
console.log(respostaPar);
// o resultado é 0, pq não sobra nada da divisão ... 
//se um usuário colocar um número ímpar, o resto da divisão vai ser 1.
ACABA AQUI */

//EXERCICIO 3
/*COMEÇA AQUI
let idadeDeUsuario = Number(prompt("Digite aqui sua idade:"));

let idadeDeUsuarioMeses = idadeDeUsuario * 12;
console.log(idadeDeUsuarioMeses);

let idadeDeUsuarioDias = idadeDeUsusario * 365;
console.log(idadeDeUsuarioDias);

let idadeDeUsuarioHoras = idadeDeUsuario * ( 24 * 365 );
console.log(idadeDeUsuarioHoras);

console.log("Sua idade em meses é ", idadeDeUsuarioMeses, "e em dias é ", idadeDeUsuarioDias, ", e em horas é ", idadeDeUsuarioHoras);
TERMINA AQUI */

//EXERCICIO 4

let primeiroNumero = Number(prompt("Quanto é 2 + 3?"));

let segundoNumero = Number(prompt("Quanto é 2 + 2?"));

let maiorQue = primeiroNumero > segundoNumero;
console.log(maiorQue);

let igualAo = primeiroNumero === segundoNumero;
console.log(igualAo);

let divisivelPeloSegundo = primeiroNumero / segundoNumero;
console.log(divisivelPeloSegundo);

let divisivelPeloPrimeiro = segundoNumero / primeiroNumero;
console.log(divisivelPeloPrimeiro)





