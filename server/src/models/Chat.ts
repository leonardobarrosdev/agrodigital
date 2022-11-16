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
    ownerId: Product.owner.id

    @TableForeignKey()
    userId: User.id

    @Column('text')
    message: string

    @Column()
    date: Date.now()


    @OneToOne(type => User, (owner) => Product.owner)
    owner: owner
    
    @OneToOne(type => User, (client) => User)
    client: client
}
