import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm'

import { User } from './User'

@Entity()
export class Product {
    @PrimaryColumn('uuid')
    id: string
    
    @Column({length: 120})
    name: string
    
    @ManyToOne(type => User, owner => User)
    owner: string

    @Column()
    photo: string

    @Column()
    price: string

    @Column("text")
    description: string
}