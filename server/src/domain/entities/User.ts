import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    BeforeInsert
} from 'typeorm';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';

import { Product } from './Product';
import { Chat } from './Chat';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({ type: 'varchar' })
    firstName: string

    @Column({ type: 'varchar' })
    lastName: string

    @Column({ type: 'varchar' })
    @IsEmail()
    email: string

    @Column({ type: 'varchar' })
    password: string

    @CreateDateColumn({ default: new Date() })
    created_at?: Date

    @CreateDateColumn({ default: new Date() })
    updated_at?: Date

    @OneToMany(() => Product, (Product) => Product.code)
    products: Product[]

    @OneToMany(() => Chat, (Chat) => Chat.id)
    chats: Chat[]

    @BeforeInsert()
    encryptPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}
