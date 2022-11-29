import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm'

// import { Chat } from './Chat'
// import { Product } from './Product'

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

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    // @OneToMany(type => Product, products => Product, {
    //     cascade: true,
    // })
    // @Column()
    // products: Product[]

    // @OneToMany(type => Chat, chats => Chat)
    // chats: Chat[]

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
