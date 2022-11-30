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
    @PrimaryGeneratedColumn()
    id: number

    @TableForeignKey()
    ownerId: Product.owner.id

    @TableForeignKey()
    userId: User.id

    @Column('text')
    message: string

    @Column()
    date: Date

    @OneToOne(type => User, (user) => Product.owner)
    owner: User
    
    @OneToOne(type => User, (user) => User)
    client: User
}
