import { Router } from 'express';

import UserRepository from '../repositories/UserRepository';
import UsersController from '../controllers/UsersController';
import { userMiddleware } from '../middlewares/userMiddleware';

const userRouters = Router();
const userRepository = new UserRepository();


userRouters.get('/', (req, res) => {
	const users = userRepository.getUsers();

	return res.json(users);
});

userRouters.post('/register', (req, res) => {
	const { fullName, email, password } = req.body;
	const usersController = new UsersController(userRepository);
	const user = usersController.execute({ fullName, email, password });

	return res.json(user);
});

userRouters.post('/login', async (req, res) => {
	const { email, password } = req.body();
});


// userRouters.get('/users', async (req, res) => {
// 	res.json(await getRepository(User).find());
// });


export default userRouters;