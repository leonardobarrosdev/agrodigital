import {
    Column,
    Entity,
} from 'typeorm'

import { User } from './User'

@Entity()
export class Chat {
    
    @Column()
    id: number

    @Column("text")
    message: string

    @Column()
    date: Date
}