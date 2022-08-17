// Ex 2
// Crie um arquivo chamado data.ts que exporta um array de produtos.
// Cada produto será representado por um objeto com propriedades: id (string),
// name (string) e price (number). 
//Popule manualmente o array com pelo menos 3 produtos.

export type Products = {
    id: string,
    name: string,
    price: number
}

export const productsList: Products[] = [
    {
        id: "T - 1",
        name: "Top de Alça",
        price: 89
    },
    {
        id: "T - 2",
        name: "Top Tomara Que Caia",
        price: 59
    },
    {
        id: "T - 3",
        name: "Top Frente Unica",
        price: 69
    },
    {
        id: "T - 4",
        name: "Top 10 em 1",
        price: 109
    },
    {
        id: "T - 5",
        name: "Top WorkOut",
        price: 189
    },
    {
        id: "C - 1",
        name: "Calcinha Asa Delta",
        price: 89
    },
    {
        id: "C - 2",
        name: "Cancilnha Cintura Alta",
        price: 109
    },
    {
        id: "C - 3",
        name: "Boy Short",
        price: 129
    },
    {
        id: "C - 4",
        name: "Sunquini",
        price: 89
    },
    {
        id: "C - 5",
        name: "Calcinha Triangulo",
        price: 59
    },
    {
        id: "M - 1",
        name: "Maiô Básico",
        price: 289
    },
    {
        id: "M - 2",
        name: "Maiô anos 80",
        price: 89
    },
]