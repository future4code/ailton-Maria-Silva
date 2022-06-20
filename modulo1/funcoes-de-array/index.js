// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
// Ex 1:

/*

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

*/

//a) vai imprimir a variavel novoArrayA, que recebe um novo array com nomes, apelidos e a 
//posição no array dos objetos

// Ex 2

/*

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

*/

//a) vai imprimir a variavel novoArrayB, que recebe um novo array apenas com os nomes dos objetos

// Ex 3 

/*

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

*/

//a) vai retornar um novo array que recebe todos os outros objetos, menos "Chijo"


// EXERCÍCIO DE ESCRITA DE CÓDIGO

// Ex 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]    
    
//a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomeDoguinhos = pets.map((item, index, array) => {
    return item.nome
 })
 
 console.log(arrayNomeDoguinhos)

//b) Crie um novo array apenas com os cachorros salsicha

const arraySalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 
 console.log(arraySalsichas);

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const arrayPoodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle";
 })

const retornarPoodles = arrayPoodles.map((item, index) => {
	return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})

console.log(retornarPoodles);

// Ex 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) Crie um novo array que contenha apenas o nome de cada item

const arrayNomeProdutos = produtos.map((item, index, array) => {
    return item.nome
 })

 console.log(arrayNomeProdutos);

//b) Crie um novo array que contenha um objeto com o nome
// e o preço de cada item, aplicando 5% de desconto em todos eles

const arrayDesconto = produtos.map((item, index, array) => {
    return {nome:item.nome, preco: (item.preco * 0.95)}
 })

 console.log(arrayDesconto);

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })

 console.log(arrayBebidas);

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const arrayYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(arrayYpe);

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
//não funcionou, vou rever amanhã cedo 

const arrayDescontoYpe = arrayDesconto.filter((item, index, array) => {
    return item.nome.includes("Ypê"),item.preco
 });

const retornaDescontosYpe = arrayDescontoYpe.map((item, index, array) => {
	return (`Compre ${item.nome} por ${item.preco}`)
})

console.log(retornaDescontosYpe);




















