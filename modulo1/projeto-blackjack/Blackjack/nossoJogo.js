/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 const boasVindas = console.log("Bem vindo(a) ao jogo de Blackjack!");
    
let inicio = confirm("Quer iniciar uma nova rodada?");

let primeiraMaoUsuario = comprarCarta();
let segundaMaoUsuario = comprarCarta();

let maoUsuario = primeiraMaoUsuario + segundaMaoUsuario;


let primeiraMaoPC = comprarCarta();
let segundaMaoPC = comprarCarta();

let maoPC = primeiraMaoPC + segundaMaoPC;

if(inicio === true){
   maoUsuario;
   console.log(`Usuário ${carta.texto} ${carta.texto}`);
   console.log(carta.valor)

   maoPC;
   console.log(`Computador ${carta.texto} ${carta.texto}`)
   console.log(carta.valor) 
    /*  if (maoUsuario < maoPC)
         console.log ("Você perdeu");

   }else if (maoPC < maoUsuario)
         console.log("Você ganhou");{
         
         }else{ 
            console.log("Deu empate")
         } */
   }else{
      alert("O jogo acabou!")
   }

   // AINDA PARA TERMINAR, O CONSOLE DIZ QUE CARTA ESTÁ INDEFINIDO !