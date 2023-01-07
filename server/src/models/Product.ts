import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
    JoinColumn
} from 'typeorm';

import { User } from './User';
import { Sale } from './Sale';
import { Chat } from './Chat';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    code: string
    
    @Column({length: 120})
    name: string

    @Column()
    typeProduct: string

    @Column()
    photo: string

    @Column('float')
    price: number

    @Column('text')
    description: string

    @Column()
    address: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @OneToOne(() => User, (User) => User.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    owner: User

    @OneToOne(() => Sale, (Sale) => Sale.product)
    sales: Sale

    @OneToOne(() => Chat, (Chat) => Chat.owner)
    chat: Chat

    @OneToMany(() => Chat, (Chat) => Chat.client)
    chats: Chat[]

    constructor(
        name: string,
        typeProduct: string,
        photo: string,
        price: number,
        description: string,
        address: string,
    ) {
        this.name = name;
        this.typeProduct = typeProduct;
        this.photo = photo;
        this.price = price;
        this.description = description;
        this.address = address;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}