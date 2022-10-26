import * as path from "path";
import { FileSystem } from "../../services/FileSystem";
import { IdGenerator } from "../../services/IdGenerator";

const readignJSON: any = new FileSystem().readFileJson(path.resolve(__dirname, "../../../products.json"))

export const products: any = readignJSON.products.map((product: any) => {
  return {
    id: product.id,
    name: product.name
  }
})

export const tags: any = readignJSON.products.flatMap((product: any) => {
  return product.tags
})

const noRepeatTags = [... new Set(tags)]

export let tag: any = [];
for (let i = 0; i < noRepeatTags.length; i ++){
  tag.push({tag: noRepeatTags[i]})
}

let counter : number = 0;

export const productsWithTags = []

while (counter < tag.length) {
  for(let i = 0; i < tag[counter].tags.length; i++){
    if (tag[counter].tags[i] === tags[i]){
      productsWithTags.push({
        tags: tag[counter].tags[i]
      })
    }
    counter++
  }
}
