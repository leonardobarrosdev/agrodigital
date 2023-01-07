import {
    Column,
    Entity,
    PrimaryColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { User } from './User';
import { Product } from './Product';
import { Message } from './Message';

@Entity()
export class Sale extends Message {
    @Column()
    salesNumber: number

    @OneToOne(() => User)
    owner: User

    @OneToOne(() => Product, (Product) => Product.code, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    product: Product
}
