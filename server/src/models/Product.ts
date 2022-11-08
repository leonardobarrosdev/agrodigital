import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'

import { User } from './User'

@Entity()
export class Product {

    @PrimaryColumn()
    id: number
    
    @Column({length: 120})
    name: string
    
    @OneToOne(type => User, product => Product)
    owner: string

    @Column()
    photo: string

    @Column()
    price: string

    @Column("text")
    description: string
}