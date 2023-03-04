import {
	Entity,
	Column,
	PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export abstract class Message {
	@PrimaryGeneratedColumn()
	id: string

	@Column({ length: 120 })
	title: string

	@Column('text')
	message: string

	@Column({ default: new Date() })
	created_at: Date

	@Column({ default: new Date() })
	updated_at: Date
}