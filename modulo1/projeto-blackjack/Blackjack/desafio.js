/***
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 */
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    //console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    //console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 /* 
 * 
 * 
 */

   
   console.log("Bem vindo(a) ao jogo de Blackjack!");
    
    if(inicio = confirm("Quer iniciar uma nova rodada?") == true){

       let primeiraMaoUsuario = comprarCarta();
       let segundaMaoUsuario = comprarCarta();
       const maoUsuario = primeiraMaoUsuario.valor + segundaMaoUsuario.valor;
       //maoUsuario;
       console.log(`Usuário - cartas: ${carta.texto} ${carta.texto},  ${carta.valor + carta.valor}`);
       //console.log(maoUsuario)
      
       let primeiraMaoPC = comprarCarta();
       let segundaMaoPC = comprarCarta();
       const maoPC = primeiraMaoPC.valor + segundaMaoPC.valor;
       //maoPC;
       console.log(`Computador - cartas:  ${carta.texto} ${carta.texto}, ${carta.valor + carta.valor}`);
       //console.log(maoPC) 
         
            if (maoUsuario < maoPC) {
               console.log ("O computador ganhou");
            }else if (maoPC < maoUsuario)
               console.log("O usuário ganhou");{
             
            }if(maoUsuario === maoPC){
               (console.log("Empate!"))}
             
   }else{
       console.log("O jogo acabou!") 
       }

// Não ficou 100%
