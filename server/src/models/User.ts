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

@Entity('Users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({ type: 'varchar', length: 40 })
    firstName: string

    @Column({ type: 'varchar', length: 100 })
    lastName: string

    @Column({ type: 'varchar', length: 220})
    @IsEmail()
    email: string

    @Column({ type: 'varchar'})
    password: string

    @CreateDateColumn({default: new Date()})
    created_at?: Date

    @CreateDateColumn({default: new Date()})
    updated_at?: Date

    // @OneToMany(() => Product, (Product) => Product.code, {
    //     onDelete: 'CASCADE'
    // })
    // products: Product[]

    // @OneToMany(() => Chat, (Chat) => Chat.id)
    // chats: Chat[]

    @BeforeInsert()
    encryptPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }

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
