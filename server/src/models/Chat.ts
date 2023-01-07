import {
    Entity,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { User } from './User';
import { Product } from './Product';
import { Message } from './Message';

@Entity()
export class Chat extends Message {
    @OneToOne((type) => User, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    owner: User
    
    @OneToOne(() => User, (User) => User, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    client: User
}
