// Ex 1

function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b!==c) {
        return "Escaleno";
    } else if (a === b && b === c){
        return "Equilátero";
    } else {
        return "Isóceles";
    }
}
console.log(checaTriangulo(10, 20, 10))

// Ex 2

function imprimeTresCoresFavoritas ():void {
    const cor1:string = process.argv[2];
    const cor2:string = process.argv[3];
    const cor3:string = process.argv[4];

    console.log(cor1, cor2, cor3)
}

// Ex 3

function checaAnoBissexto (ano:number):boolean {
    const cond1 = ano % 400 ===0;
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

// Ex 4 

function comparaDoisNumeros(num1:number, num2:number):number{
    let maiorNum;
    let menorNum;

    if (num1 > num2) {
        maiorNum = num1;
        menorNum = num2;
    } else {
        maiorNum = num2;
        menorNum = num1;
    }
    const diferenca:number = maiorNum - menorNum;
    return diferenca
}

// Ex 5

function checaRenovacaoRG (anoAtual:number, anoNascimento:number, anoEmissao:number): string{
    let idade:number = anoAtual - anoNascimento;
    let tempoCarteira:number = anoAtual - anoEmissao;

    if(idade <= 20){
        return tempoCarteira >= 5 ? "Passou 5 anos, precisa renovar" : "Ainda não passou 5 anos"
    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "Passou 10 anos, precisa renovar" : "Ainda não passou os 10 anos"
    } else if (idade > 50) {
        return tempoCarteira >= 15 ? "Passou dos 15 anos, precisa renovar" : "Ainda não passouos 15 anos"
    } else {
        return "error"
    }
}

// Ex 6 

function retornaNumeros (num1: number, num2: number):number{

    let maiorNum;
    let menorNum;

    if (num1 > num2) {
        maiorNum = num1;
        menorNum = num2;
    } else {
        maiorNum = num2;
        menorNum = num1;
    }
    
    let soma:number = maiorNum + menorNum;
    let sub:number = maiorNum - menorNum;
    let mult:number = maiorNum * menorNum;

    const arrayOfNumber: number[] = [maiorNum, soma, sub, mult];

    return arrayOfNumber

}