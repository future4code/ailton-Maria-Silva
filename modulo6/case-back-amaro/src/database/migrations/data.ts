import { IProductDB } from "../../models/Product";

export const products: IProductDB[] = [
    {
        id: "8371",
        name: "VESTIDO TRICOT CHEVRON"
      },
      {
        id: "8367",
        name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
      },
      {
        id: "8363",
        name: "VESTIDO CURTO MANGA LONGA LUREX"
      },
]

export const tags: Array<string> = [
  "casual",
  "metal",
  "delicado",
  "balada",
  "neutro",
  "festa",
]

export const productsWithTags: IProductDB[] = [
  {
    "id": "8371",
    "name": "VESTIDO TRICOT CHEVRON",
    "tags": ["balada", "neutro", "delicado", "festa"]
  },
  {
    "id": "8367",
    "name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
    "tags": ["casual", "metal", "metal"]
  },
  {
    "id": "8363",
    "name": "VESTIDO CURTO MANGA LONGA LUREX",
    "tags": ["colorido", "metal", "delicado", "estampas", "passeio"]
  },
  {
    "id": "8360",
    "name": "VESTIDO FEMININO CANELADO",
    "tags": ["workwear", "viagem", "descolado"]
  },
  {
    "id": "8358",
    "name": "VESTIDO REGATA FEMININO COM GOLA",
    "tags": ["moderno", "inverno", "liso", "basics"]
  }
]