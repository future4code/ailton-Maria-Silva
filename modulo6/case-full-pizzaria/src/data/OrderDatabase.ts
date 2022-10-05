import { IPizzaDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "Amb_Orders"
    public static TABLE_ORDER_ITEMS = "Amb_Order_Items"

    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getPrice()
        }        
    }
} 