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
    @PrimaryGeneratedColumn('uuid')
    id: number

    @TableForeignKey()
    idUser: User.id
    
    @ManyToMany(type => User, (user) => User.name)
    @JoinTable()
    usernames: User[]

    @Column("text")
    message: string

    @Column()
    date: Date
}
