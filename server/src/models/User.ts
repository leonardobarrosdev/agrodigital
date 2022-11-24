import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm'

import { Chat } from './Chat'
import { Product } from './Product'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column({length: 40})
    firstName: string

    @Column({length: 100})
    lastName: string

    @Column({length: 120})
    email: string

    @Column()
    password: string


    @OneToMany(type => Product, product => Product, {
        cascade: true,
    })
    @Column()
    products: Product[]

    @OneToMany(type => Chat, chats => Chat)
    chats: Chat[]
}
