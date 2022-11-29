import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { ForbidenError } from '../utils/AppError';

interface IRequest {
	fullName: string;
	email: string;
	password: string;
}

class UsersController {
	constructor(private userRepository: UserRepository) {}

	execute({ fullName, email, password }: IRequest): User {
		const userExist = this.userRepository.findByEmail(email);

		if(userExist) {
			throw new ForbidenError('User already created.');
		}

		const user = this.userRepository.create({ fullName, email, password });

		return user;
	}
}

export default UsersController;
