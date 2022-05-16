//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// EX 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/*a) console.log(filme.elenco[0]) ---- imprime a primeira string do array, "Matheus Nachtergaele",
     console.log(filme.elenco[filme.elenco.length - 1]) ---- imprime a última string do array, "Virginia Cavendish",
     console.log(filme.transmissoesHoje[2]) ---- imprime o 2° propriedade do objeto transmissoesHoje, que é "Globo", "14h"
*/

// EX 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) 

//a) console.log(cachorro) vai imprimir 'Juca', 3, 'SRD'
// console.log(gato) vai imprimir 'Juba', 3, SRD
// console.log(tartaruga) vai imprimir 'Jubo", 3, SRD

//b) a sintaxe '...' clonar vai copiar todas as propriedades do objeto, mas pode sobrescrever o valor da chave.

// EX 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a)console.log(minhaFuncao(pessoa, "backender")) - vai imprimir false, que é o valor da chave backender
//  console.log(minhaFuncao(pessoa, "altura")) - vai dar undefined, porque não existe a chave "altura"

//b) não existe a chave altura - ela literalmente não foi definida, porque não existe.

//EXERCICIOS DE ESCRITA DE CÓDIGO
// EX 1
//a)
const pessoaFulano = {
    nome: "Bruce Wayne",
    apelido: ["Batman", "Vigilante Noturno", "Cavaleiro das Trevas"]
}

function imprimeFulano() {
    return `Eu sou ${pessoaFulano.nome}, mas pode me chamar de: ${pessoaFulano.apelido[0]}, ${pessoaFulano.apelido[1]} ou ${pessoaFulano.apelido[2]}.`
}

console.log(imprimeFulano(pessoaFulano))

//b)
const pessoaFulanoDois = {
            ...pessoaFulano,
            apelido: ["Michael Keaton", "Chritian Bale", "Wal Kilmer"]    
}

function imprimeFulano() {
    return `Eu sou ${pessoaFulanoDois.nome}, mas pode me chamar de: ${pessoaFulanoDois.apelido[0]}, ${pessoaFulanoDois.apelido[1]} ou ${pessoaFulanoDois.apelido[2]}.`
}

console.log(imprimeFulano(pessoaFulanoDois))

// EX 2 

const pessoaUm = {
    nome: "Dwight Schrute" ,
    idade: 43,
    profissao: "Assistente do Gerente Regional"
} 

const pessoaDois = {
    nome: "Michael Scott",
    idade: 45,
    profissao: "Gerente Regional"
} 

function retornarArray () {
    let detalhesPessoaUm = [pessoaUm.nome, pessoaUm.nome.length, pessoaUm.idade, pessoaUm.profissao, pessoaUm.profissao.length];
    let detalhesPessoaDois = [pessoaDois.nome, pessoaDois.nome.length, pessoaDois.idade, pessoaDois.profissao, pessoaDois.profissao.length];
    return detalhesPessoaUm, detalhesPessoaDois
     
}

console.log(retornarArray(pessoaUm));
console.log(retornarArray(pessoaDois));

// EX 3
//a)
let carrinho = [];

//b)
const frutaUm = {
    fruta: "Morango",
    disponibilidade: true
}

const frutaDois = {
    fruta: "Uva",
    disponibilidade: true
}

const frutaTres = {
    fruta: "Melão",
    disponibilidade: true
}

//c)
function asFrutas(frutaUm, frutaDois, frutaTres) {
    let carrinho = carrinho.push(frutaUm);
    let carrinho = carrinho.push(frutaDois);
    let carrinho = carrinho.push(frutaTres);
    return carrinho
}

//d)
console.log(asFrutas(carrinho));



/*  

    let carrinho = carrinho.push(frutaUm);
    let carrinho = carrinho.push(frutaDois);
    let carrinho = carrinho.push(frutaTres);

    carrinho.push(frutaUm, frutaDois, frutaTres);

    let carrinho = [(frutaUm), (frutaDois), (frutaTres)]

    Essas foram as outras formas que eu tentei, não imprime, honestamente, já nem imagino mais como prosseguir
    */
