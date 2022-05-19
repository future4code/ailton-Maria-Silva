// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// Ex 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// a variável valor, recebe 0, para o i = 0, enquanto ela for menor que 5, vai somar +1
// depois vai pegar esse valor, e somar com ele mesmo e imprimir o valor, que vai ser 10.

// Ex 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) Vai imprimir os números maiores que 18.

//b) Teria que criar uma variaver com valor array para armazenar os números maiores que 18

// Ex 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// pelo que eu entendi, vai imprimir 4 linhas de asteriscos, e somar mais 1 a cada linha


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Ex 1

//a) Se a quantidade for 0, imprima no console 
//"Que pena! Você pode adotar um pet!"

//b) Se a quantidade for maior que 0, solicite que o usuário 
//digite os nomes deles, um por um, e guarde esses nomes em um array

//c) Por fim, imprima o array com os nomes dos bichinhos no console


let nomeAnimais = [];
let quantosAnimais = Number(prompt("Quantos animais você tem?"));
nomeAnimais.push(quantosAnimais);

if (quantosAnimais === 0){
  console.log("Que pena, você pode adotar um pet!")
}else{
  for (let i = 0; i < quantosAnimais; i++);
    let animaisQueTem = prompt("Digite o nome dele:");
    animaisQueTem.push(nomeAnimais);
}
console.log(nomeAnimais);
 
//-------------------------------------------------------

let quantosAnimais = Number(prompt("Quantos animais você tem?"));


if(quantosAnimais === 0){

    console.log("Que pena, você pode adotar um pet!")

}else{
    for (let i =0; i < quantosAnimais; i++);
        let animaisQueTem = [];
        animaisQueTem = (prompt("Digite o nome deles:"));
        animaisQueTem.push[(animaisQueTem)];
}
console.log(animaisQueTem);

//

let quantosAnimais = Number(prompt("Quantos animais você tem?"));
  if (quantosAnimais === 0);

// ESSA NÃO TÁ ROLANDO AINDA, EU SEI O QUE PRECISO FAZER, MAS NÃO SEI COMO
// FOI O QUE CONSEGUI FAZER ATÉ O MOMENTO / no meu não deu certo, só chega perguntar uma vez o nome do Animal


// Ex 2


let arrayOriginal = [54, 289, 989, 675, 23, 9, 567, 66, 98, 54];
//a)
for(let numeroArrayOriginal of arrayOriginal){
    console.log(numeroArrayOriginal)
    }


//b)  /10
for(let numeroArrayOriginal of arrayOriginal){
    console.log(numeroArrayOriginal / 10)
    }


//c) %2 === 0
let numerosPares = () =>
    let arrayPares = [];
    for (let i = 0; i < arrayOriginal.length; i++){
        if(numeroArrayOriginal[i] % ===0){
        arrayPares.push(arrayOriginal[i])}
        console.log(arrayPares)

    }
    console.log(numerosPares(arrayPares))


//d) 
let arrayOriginal

`O elemento do índex i é: ${}`



//e) 

let valorMaximo = 

let valorMinimo = 
