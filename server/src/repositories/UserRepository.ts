import { User } from '../models/User';
import AppDataSource from '../database/data-source';

interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	updated_at?: Date;
}

export default class UserRepository {
	// private AppDataSource = getDataSource();
	// private manager = this.AppDataSource.getRepository(User);
	private manager = AppDataSource.manager;

	constructor() {}

	async create({
		firstName, lastName, email, password
	}: IUser): Promise<User> {
		const user = new User();

		user.firstName = firstName;
		user.lastName = lastName;
		user.email = email;
		user.password = password;

		await this.manager.save(user);

		return user;
	}

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

	async update(id: string, user: IUser): Promise<User> {
		const usr = await this.findById(id);

		for(let attribute in user) {
			if(usr[`${attribute}`] !== attribute) {
				usr[`${attribute}`] = attribute;
			}
		}

		usr.updated_at = new Date();

		this.manager.save(usr);

		return usr;
	}

	async delete(id: string): Promise<boolean> {
		const user = await this.findById(id);

		if(!user) return false;

		this.manager.remove(User);

		return (await this.findById(id))? true : false;
	}
}
