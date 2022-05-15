// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retangulo"));
  const largura = Number(prompt("Digite a largura do retangulo!"));
  const area = altura * largura;
  console.log(area)
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"));//2020, 1990
  let anoDoNascimento = Number(prompt("Digite o ano do seu nascimento:"));//2021, 1967
  const idadeAtual = anoAtual - anoDoNascimento;
  return idadeAtual;
}
console.log(imprimeIdade(idadeAtual));

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui
  let peso = Number(prompt("Digite seu peso em kg:"));// 85 , 1.8
  let altura = Number(prompt("Digite sua altura em metros:"))// 70, 1.65
  let iMC = peso / (altura * altura);
  return iMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Digite aqui seu nome:");
  let idadeUsuario = Number(prompt("Digite aqui sua idade:"));
  let emailUsuario = prompt("Digite aqui seu e-mail:");
  return `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
}
console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corFavoritaUm = prompt("Me diga uma cor que te traga calma:");
  let corFavoritaDois = prompt("Me diga uma cor que te deixe animada(o):");
  let corFavoritaTres = prompt("Me diga a cor que mais se destaca no seu guarda roupa:");
  return [corFavoritaUm] [corFavoritaDois] [corFavoritaTres]
}
console.log(imprimeTresCoresFavoritas([corFavoritaUm, corFavoritaDois, corFavoritaTres]));

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula("oi"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let custoDoIngresso = custo;
  let valorDoIngresso = valorIngresso;
  let ingressosVendidos = custoDoIngresso / valorDoIngresso;
  return ingressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
   let comprimentoStrings = string1.length === string2.length
  return comprimentoStrings
}
console.log(checaStringsMesmoTamanho("olá","abc"));
console.log(checaStringsMesmoTamanho("teste","porta"));
console.log(checaStringsMesmoTamanho("abc","abcd"));

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let array = [1, 2, 3];
  let primeiroArray = array[0];
  return primeiroArray
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let array = [1, 2, 3, 4, 5];
  let ultimoArray = array[array.length -1];
  return ultimoArray
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
   array = [1, 2, 3, 4, 5]
  primeiroArray = array[0]
  ultimoArray = array[array.length - 1]
  array.pop();
  array.splice(0,1,ultimoArray);
  array.push(primeiroArray);
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let comparacaoStrings = string1 >= string2
  return comparacaoStrings 
}

console.log(checaIgualdadeDesconsiderandoCase("olá", "olA"))
console.log(checaIgualdadeDesconsiderandoCase("bananinha","BANANINHA"))
console.log(checaIgualdadeDesconsiderandoCase("banana", "BANANINHA"))


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}