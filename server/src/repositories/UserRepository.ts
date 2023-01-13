import { User } from '../models/User';
import AppDataSource from '../database';

interface IUser {
	id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	updated_at?: Date;
}

export default class UserRepository {
	private manager = AppDataSource.manager;

	constructor() {}

	async getUsers(): Promise<User[]> {
		const users = await this.manager.find(User);
		
		return users;
	}

	async findByEmail(email: string): Promise<User> {
		const user = await this.manager.findOne(User, {
			where: { email }
		});

		return user;
	}

	async findById(id: string): Promise<User> {
		const user = await this.manager.findOneBy(User, {
			id: id
		});

		return user;
	}

	async create(user: IUser): Promise<User> {
		const usr = new User();

		for(const key in user) {
			usr[`${key}`] = user[`${key}`]
		}

		await this.manager.save(usr);

		return usr;
	}

	async update(id: string, user?: IUser): Promise<User> {
		const usr = await this.findById(id);

		for(let key in user) {
			if(usr[`${key}`] !== user[`${key}`]) {
				usr[`${key}`] = user[`${key}`];
			}
		}

		usr.updated_at = new Date();

		this.manager.save(usr);

		return usr;
	}

	async delete(id: string): Promise<boolean> {
		const user = await this.findById(id);
		let result = !user;

		if(result) return false;

		this.manager.remove(User);

		result = (await this.findById(id))? true : false;

		return result;
	}
}
