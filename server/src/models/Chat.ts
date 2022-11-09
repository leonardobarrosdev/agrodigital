import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
    TableForeignKey,
} from 'typeorm'

import { User } from './User'

@Entity()
export class Chat {
    @PrimaryColumn('uuid')
    id: number

    @ManyToMany(type => User, (user) => User.name)
    @JoinTable()
    usernames: User[]

    @Column("text")
    message: string

    @Column()
    date: Date
}