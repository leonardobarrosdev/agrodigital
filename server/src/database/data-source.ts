import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import { User } from '../models/User';
import { Product } from '../models/Product';
import { Sale } from '../models/Sale';
import { Chat } from '../models/Chat';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: Number(process.env.PORT_DB),
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Product, Sale, Chat],
  subscribers: [],
  migrations: [],
});
