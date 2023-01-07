import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../models/User";
import { Product } from "../models/Product";
import { Sale } from '../models/Sale';
import { Chat } from '../models/Chat';


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "agrodigital",
    synchronize: true,
    logging: true,
    // entities: [User, Product, Sale, Chat],
    entities: [
        __dirname + '/../models/*.ts'
    ],
    migrations: [] //[__dirname + '/migrations/**/*.{js,ts}'],
    // subscribers: true,
});

export default AppDataSource;
