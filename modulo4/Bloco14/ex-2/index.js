// Ex 2

switch (operacao){
    case "soma":
        const soma = Number (process.argv[2] + process.argv[3])
        break;
    case "sub":
        const sub = Number (process.argv[2] - process.argv[3])
        break;
    case "mult":
        const mult = Number (process.argv[2] * process.argv[3])
        break;
    case "div":
        const div = Number (process.argv[2] / process.argv[3])  
        break;   
}
