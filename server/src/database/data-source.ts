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
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Product, Sale, Chat],
  subscribers: [],
  migrations: [],
});
