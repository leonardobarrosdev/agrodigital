import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { ForbidenError } from '../utils/AppError';

interface IRequest {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	updated_at?: Date;
}

class UserController {
	constructor(private userRepository: UserRepository) {}

	async create(user: IRequest): Promise<User> {
		const userExist = await this.userRepository.findByEmail(user.email);

		if(userExist) {
			throw new ForbidenError('Usuário já existe.');
		}

		let updated_at = Date();
		const usr = await this.userRepository.create(user);

		return usr;
	}

	async update(id: string, user?: IRequest): Promise<User> {
		if(!await this.userRepository.findById(id)) {
			throw new ForbidenError('User not exist.');
		}

		const usr = await this.userRepository.update(id, user);

		return usr;
	}
}

export default UserController;
