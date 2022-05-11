/*
//Exercicio 1:
let a = 10;
let b = 10;

console.log(b);
//vai imprimir: 10.

//Exercicio 2:
b = 5;
console.log(a, b);
//vai imprimir: 10 e 5, porque agora o b recebe o valor 5.

let a = 10;
let b = 20;
c = a;
b = c;
a = b;
console.log( a, b, c);
/*vai imprimir: 10, 10, 10, porque c recebeu o valor de a, que era 10,
depois b recebeu o valor de c, que era 10, e depois a recebeu o valor de b, 1ue era 10. */

//Exercicio 3:
/*
let p = prompt("Quantas horas você trabalha por dia?");
let t = prompt("Quanto você recebe por dia?");
alert('Você recebe ${t/p} por hora');

// ou 

let horasPorDia = prompt("Quantas horas você trabalha por dia?");
let salarioPorDia = prompt("Quanto você recebe por dia?");
alert('Você recebe $', {salarioPorDia/horasPorDia}, 'por hora')
*/


//EXERCICIO DE ESCRITA DE CÓDIGO:

/*
let nome 
let idade 

console.log(typeof nome, typeof idade);

//deu undefined undefined, porque as variaveis não receberam nenhum valor para imprimir.

*/

/*
let nome = prompt("Olá, como você se chama?");

let idade = prompt("Agora, qual sua idade?");

console.log( typeof nome, typeof idade);
//imprimiu que são string string.

console.log("Olá,", nome, "você tem", idade, "anos."); */

//EXERCICIO 3 PERGUNTAS SIM OU NÃO

/*let climaTempo = prompt("Onde você mora está frio?");

let sol = prompt("O sol apareceu?");

let roupas = prompt("Você está usando mais de uma blusa de frio?");

console.log(climaTempo, sol, roupas);  
*/

//EXERCICIO TROCANDOS VALORES

/*let a = 10;
let b = 25;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
*/

//DESAFIO

let numUm = Number(prompt("Me dê um número."));

let numDois = Number(prompt("Me diga outro número!!!"));

console.log( numUm + numDois)

console.log( numUm * numDois)

