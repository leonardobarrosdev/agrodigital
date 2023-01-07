import { Router } from 'express';

import UserRepository from '../repositories/UserRepository';
import UsersController from '../controllers/UsersController';
// import { userMiddleware } from '../middlewares/userMiddleware';

const userRouters = Router();
const userRepository = new UserRepository();
const usersController = new UsersController(userRepository);


userRouters.get('/', async (req, res) => {
	const users = await userRepository.getUsers();

	return res.json(users);
});

userRouters.get('/:id', async (req, res) => {
	const user = await userRepository.findById(
		req.params.id
	);

	return res.json(user);
});

userRouters.get('/:email', async (req, res) => {
	const user = await userRepository.findByEmail(
		req.params.email
	);

	return res.json(user);
});

// userRouters.post('/login', (req, res) => {});

userRouters.post('/cadastrar', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const user = await usersController.create({
		firstName, lastName, email, password
	});

	return res.json(user);
});

userRouters.patch('/editar/:id', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const id = String(req.params.id);
	const user = await usersController.update(id, {
		firstName, lastName, email, password
	});

	return res.json(user);
});

// userRouters.put('/editar/:id', async (req, res) => {});

userRouters.delete('/:id', async (req, res) => {
	const result = await userRepository.delete(
		String(req.params.id)
	);

	return res.send(result);
});

export default userRouters;