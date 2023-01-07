import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import { Product } from './Product';
import { Chat } from './Chat';

@Entity('Users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({ type: 'varchar', length: 40 })
    firstName: string

    @Column({ type: 'varchar', length: 100 })
    lastName: string

    @Column({ type: 'varchar', length: 120})
    email: string

    @Column({ type: 'varchar', length: 16 })
    password: string

    @CreateDateColumn({default: new Date()})
    created_at?: Date

    @CreateDateColumn({default: new Date()})
    updated_at?: Date

    @OneToMany(() => Product, (Product) => Product.code, {
        onDelete: 'CASCADE'
    })
    products: Product[]

    @OneToMany(() => Chat, (Chat) => Chat.id)
    chats: Chat[]

    // constructor(
    //     firstName: string,
    //     lastName: string,
    //     email: string,
    //     password: string,
    // ) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.email = email;
    //     this.password = password;
    //     this.created_at = new Date();
    //     this.updated_at = new Date();
    // }
}
