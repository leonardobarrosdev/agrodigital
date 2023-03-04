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

	async getAll(): Promise<User[]> {
		const users = await this.manager.find(User);
		
		return users;
	}

	async getByEmail(email: string): Promise<User> {
		const user = await this.manager.findOne(User, {
			where: { email }
		});

		return user;
	}

	async getById(id: string): Promise<User> {
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
		const usr = await this.getById(id);

		for(let key in user) {
			if(usr[`${key}`] !== user[`${key}`]) {
				usr[`${key}`] = user[`${key}`];
			}
		}

		usr.updated_at = new Date();

		await this.manager.save(usr);

		return usr;
	}

	async delete(id: string): Promise<boolean> {
		const user = await this.getById(id);

		if(!user) return false;

		await this.manager.remove(user);

		const result = !(await this.getById(id));

		return result;
	}
}
