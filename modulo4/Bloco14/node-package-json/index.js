// Ex 1 

//a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// pelo process.argv[]

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, 
//imprima no console uma mensagem que siga a seguinte estrutura:
//"Olá, (Nome)! Você tem (sua idade) anos."

console.log("Olá ", process.argv[2], "! Você tem ", process.argv[3], " anos.")

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const value = Number(process.argv[3] + 7);

console.log("Olá", process.argv[2], "! Você tem ", process.argv[3], " anos. Em sete anos você terá ", value, " anos.")

