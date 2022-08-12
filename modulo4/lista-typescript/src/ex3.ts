enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function chooseMovie (nome : string, anoLancamento : number, GENERO : string, pontuacao ? : number) :object {
    
    type movie = {
        nome : string,
        anoDelancamento : number,
        genero : GENERO,
        pontuacao: number
    } 
    
    return movie 
}