import { BaseDatabase } from "../database/BaseDatabase";
import { ProductDatabase } from "../database/ProductDatabase"
import { products } from "./data";

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
        
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tags VARCHAR(255) NOT NULL,
        );`)
    }

    insertData = async () => {
        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert(products)
    }
}
