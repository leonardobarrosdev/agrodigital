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
    @PrimaryGeneratorColumn()
    id: int

    @TableForeigKey()

    @Column()
    date: Date()

    @column()
    salesNumber: int
}
