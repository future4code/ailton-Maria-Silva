// **Exercício 1** 


//a)
let minhaString:string = "10";
// erro, mostra a solução, o tipo number não pode ser atribuído ao tipo string

//b)
let meuNumero: number | string = 11963;
// Usar o union type, porque recebe valor indefinido, podendo ser number ou string.

//c)

type person = {
    name:string,
    age:number,
    favoriteColor:string
}

const person1 :person = {
    name: "Bruce Wayne",
    age: 6,
    favoriteColor: "preto"
}

const person2 :person = {
    name: "Petite Noir",
    age: 4,
    favoriteColor: "cinza"
}

const person3 :person = {
    name: "Athena",
    age: 5,
    favoriteColor: "branco"
}

enum RainbowColors {
    RED = "red",
    BLUE = "blue",
    ORANGE = "orange",
    INDIGO = "indigo",
    YELLOW = "yellow",
    VIOLET = "violet",
    GREEN = "green"
}

const person4 :person = {
    name: "Bruce Wayne",
    age: 6,
    favoriteColor: RainbowColors.BLUE
}

const person5 :person = {
    name: "Petite Noir",
    age: 4,
    favoriteColor: RainbowColors.INDIGO
}

const person6 :person = {
    name: "Athena",
    age: 5,
    favoriteColor: RainbowColors.ORANGE
}