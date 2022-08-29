// Ex 2
// Crie um arquivo chamado data.ts que exporta um array de produtos.
// Cada produto será representado por um objeto com propriedades: id (string),
// name (string) e price (number). 
//Popule manualmente o array com pelo menos 3 produtos.

export type Products = {
    id: number,
    name: string,
    price: number
}

export const productsList: Products[] = [
    {
        id: 1,
        name: "Top de Alça",
        price: 89
    },
    {
        id: 2,
        name: "Top Tomara Que Caia",
        price: 59
    },
    {
        id: 3,
        name: "Top Frente Unica",
        price: 69
    },
    {
        id: 4,
        name: "Top 10 em 1",
        price: 109
    },
    {
        id: 5,
        name: "Top WorkOut",
        price: 189
    },
    {
        id: 6,
        name: "Calcinha Asa Delta",
        price: 89
    },
    {
        id: 7,
        name: "Cancilnha Cintura Alta",
        price: 109
    },
    {
        id: 8,
        name: "Boy Short",
        price: 129
    },
    {
        id: 9,
        name: "Sunquini",
        price: 89
    },
    {
        id: 10,
        name: "Calcinha Triangulo",
        price: 59
    },
    {
        id: 11,
        name: "Maiô Básico",
        price: 289
    },
    {
        id: 12,
        name: "Maiô anos 80",
        price: 89
    },
]