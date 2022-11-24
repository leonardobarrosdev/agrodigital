import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm'

import { User } from './User'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    code: string

    @Column('uuid')
    id: string

    // @TableForeigKey()
    // userId: User.id
    
    @Column({length: 120})
    name: string

    @Column
    typeProduct: string

    @Column()
    photo: string

    @Column()
    price: string

    @Column('text')
    description: string

    @Column()
    date: Date

    @Column()
    Addess: string


    @ManyToOne(type => User, owner => User)
    owner: Usser
}