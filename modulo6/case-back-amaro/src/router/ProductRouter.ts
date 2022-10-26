import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator()
    )
)

productRouter.post("/product", productController.createProduct)
productRouter.get("/product/:name", productController.getProducts)
//productRouter.get("/product/:tags", productController.ByTags)

