import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { User } from './User';
import { Sale } from './Sale';
import { Chat } from './Chat';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    code: string
    
    @Column({ length: 120 })
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

    @Column({ default: new Date() })
    created_at: Date

    @Column({ default: new Date() })
    updated_at: Date

    @ManyToOne(() => User, (User) => User.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    owner: User

    @OneToOne(() => Sale, (Sale) => Sale.product, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    sales?: Sale

    @OneToOne(() => Chat, (Chat) => Chat.owner, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    chat?: Chat

    @OneToMany(() => Chat, (Chat) => Chat.client, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    chats?: Chat[]
}
