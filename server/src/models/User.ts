import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from "typeorm"

import { Product } from "./Product"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 40})
    firstName: string

    @Column({length: 100})
    lastName: string

    @Column({length: 120})
    email: string

    @OneToMany(type => Product, product => Product)
    @Column()
    product: string
}
