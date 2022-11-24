import "reflect-metadata"
import { DataSource } from "typeorm"

import { Chat } from "../models/Chat"
import { Product } from "../models/Product"
import { User } from "../models/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "agrodigital",
    synchronize: true,
    logging: false,
    entities: [User, Product, Chat],
    migrations: [__dirname + '/migration/**/*.ts'],
    subscribers: true,
})

// client.connect()
//   .then(() => console.log('Connected sucessfuly'))
//   .catch(err => console.log)
//   .finally(() => client.end())



// import { Client } from 'pg';

// const client = new Client({
//     user: 'postgres',
//     password: 'password',
//     host: 'localhost',
//     port: 5432,
//     database: 'agrodigital'
// })

// export default client;