import { User } from '../models/User';

interface IUser {
	fullName: string;
	email: string;
	password: string;
}

class UserRepository {
	private users;
	// private users = User[];

	constructor() {
		this.users = [];
	}

	create({ fullName, email, password }: IUser): User {
		let firstName = fullName.split(' ')[0];
		let lastName = fullName.split(' ')
			.slice(1).toString().replace(',', ' ');

		const user = new User(firstName, lastName, email, password);

		this.users.push(user);

		return this.users;
	}

	getUsers(): User[] {
		return this.users;
	}

	findByEmail(email: string) {
		const user = this.users.find(
			user => user.email === email
		);

		return user;
	}
}

export default UserRepository;