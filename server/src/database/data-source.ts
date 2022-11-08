import "reflect-metadata"
import { DataSource } from "typeorm"
import { Chat } from "../models/Chat"
import { Product } from "../models/Product"
import { User } from "../models/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "agrodigital",
    synchronize: true,
    logging: false,
    entities: [User, Product, Chat],
    migrations: [],
    subscribers: [],
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))