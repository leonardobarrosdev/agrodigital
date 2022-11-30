import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
    TableForeignKey,
} from 'typeorm'

@Entity()
export class Sale {
    // @PrimaryGeneratorColumn()
    // id: int

    @TableForeigKey()
    productCode: Product.code

    @TableForeigKey()
    ownerId: Product.owner.id

    @TableForeigKey()
    userId: User.id

    @column()
    salesNumber: integer

    @Column()
    date: Date
}
