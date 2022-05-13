//EXERCICIOS - INTERPRETAÇÃO DE CÓDIGO
// EX 1

let array
console.log('a. 'array);
//vai imprimir undefined, porque a variavel let não recebeu valor

array = null;
console.log('b. ', array)
//vai imprimir b. null, porque o valor null foi atribuido a variavel array

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log('c. ', array.length);
// vai imprimir c. 11, que é a quantidade de elementos dentro do array

let i = 0;
console.log('d. ', array[i]);
// vai imprimir o elemento  d. 3, que está na posição 0 do array

array[i+1] = 19;
console.log('e. ', array);
// vai colocar o elemente 19, na posição 1 do array, no lugar do 4
//e imprimir e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const valor = array[i+6];
console.log('f. ', valor)
//vai ler a partir do indice até o elemento 6, que é o 9,
//e imprimir f. 9

// EX 2
const frase = prompt("Digite uma frase");
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// vai imprimir: "SUBI NUM ÔNIBUS EM MIRROCOS" 27 (que é a quantidade de caracteres)

//EXERCICIO DE ESCRITA DE CÓDIGO
// EX 1
const nomeDoUsuario = prompt("Digite seu nome aqui:");

const emailDoUsuario = prompt("Digite seu e-mail aqui");

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + " !");
console.log(`O e-mail ${emailDeUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

// EX 2

let comidasFavoritas = ["Batata Frita", "Pizza", "Brownie", "Spaguetti", "Pão"];
console.log(comidasFavoritas);

let comidasFavoritas = 
['Batata Frita', 
'Pizza', 
'Brownie', 
'Spaguetti', 
'Pão'];
console.log(comidasFavoritas);

const comidaFavoritaDoUsuario = prompt("Qual sua comida favorita?");
comidasFavoritas[i+1] = comidaFavoritaDoUsuario;
console.log(comidasFavoritas);

// EX 3

let listaDeTarefas

const primeiraTarefa = prompt("Me dia uma tarefa do dia-a-dia:");
const segundaTarefa = prompt("Outra tarefa:");
const terceiraTarefa = prompt("Agora a última");

listaDeTarefas = [primeiraTarefa];
listaDeTarefas[i+1] = segundaTarefa;
listaDeTarefas [i+2] = terceiraTarefa;
console.log(listaDeTarefas);

const retirarDaListaDeTarefa = Number(prompt("Escolha um número entre 0, 1, e 2."));
listaDeTarefas.splice(retirarDaListaDeTarefa,1);
console.log(listaDeTarefas);