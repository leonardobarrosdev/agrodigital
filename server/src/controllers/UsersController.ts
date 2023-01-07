import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { ForbidenError } from '../utils/AppError';

interface IRequest {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	// updated_at?: Date;
}

class UsersController {
	constructor(private userRepository: UserRepository) {}

	async create({ firstName, lastName, email, password }: IRequest): Promise<User> {
		// const userExist = await this.userRepository.findByEmail(email);

		// if(userExist) {
		// 	throw new ForbidenError('Usuário já existe.');
		// }

		// let updated_at = Date();
		const user = await this.userRepository.create({
			firstName, lastName, email, password
		});

		return user;
	}

	async update(id: string, user: IRequest): Promise<User> {
		if(!await this.userRepository.findById(id)) {
			throw new ForbidenError('User not exist.');
		}

		const usr = await this.userRepository.update(id, user);

		return usr;
	}
}

export default UsersController;
