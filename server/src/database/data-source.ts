import "reflect-metadata"
import { DataSource } from "typeorm"

import { Product } from "../models/Product"
import { User } from "../models/User"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "agrodigital",
    synchronize: true,
    logging: false,
    entities: [User, Product],
    migrations: [__dirname + '/migrations/**/*.ts'],
    // subscribers: true,
});

export default AppDataSource;

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