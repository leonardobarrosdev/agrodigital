import { Router } from 'express';

import SaleRepository from '../repositories/SaleRepository';
import SaleController from '../controllers/SaleController';

const saleRouters = Router();
const saleRepository = new SaleRepository();
const saleController = new SaleController(saleRepository);

saleRouters.get('/', async (req, res) => {
	const sales = await saleController.getAll();

	return res.json(sales);
});

saleRouters.get('/:id', async (req, res) => {
	const sale = await saleController.getById(
		req.params.id
	);

	return res.json(sale);
});

saleRouters.get('/:title', async (req, res) => {
	const sale = await saleController.getByTitle(
		req.params.title
	);

	return res.json(sale);
});

saleRouters.post('/cadastrar', async (req, res) => {
	const sale = await saleController.create(
		req.body
	);

	return res.json(sale);
});

saleRouters.patch('/editar/:id', async (req, res) => {
	const sale = await saleController.update(
		req.params.id, req.body
	);

	return res.json(sale);
});

saleRouters.delete('/excluir/:id', async (req, res) => {
	const result = await saleController.delete(
		req.params.id
	);

	return (result)? res.json('Ok') : res.json('Não foi possível excluir');
});

export default saleRouters;