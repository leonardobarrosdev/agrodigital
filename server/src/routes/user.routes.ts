import { Router } from 'express';

import UserRepository from '../repositories/UserRepository';
import UserController from '../controllers/UserController';
// import { userMiddleware } from '../middlewares/userMiddleware';

const userRouters = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);


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
	const user = await userController.create({
		firstName, lastName, email, password
	});

	return res.json(user);
});

userRouters.patch('/editar/:id', async (req, res) => {
	const id = String(req.params.id);
	const user = await userController.update(id, req.body);

	return res.json(user);
});

userRouters.put('/editar/:id', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const id = String(req.params.id);
	const user = await userController.update(id, {
		firstName, lastName, email, password
	});

	return res.json(user);
});

// userRouters.put('/editar/:id', async (req, res) => {});

userRouters.delete('/excluir/:id', async (req, res) => {
	const result = await userRepository.delete(
		String(req.params.id)
	);

	return (result)? res.json('Ok') : res.json('Não foi possível excluir');
});

export default userRouters;