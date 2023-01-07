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
})

saleRouters.patch('/:id', async (req, res) => {
	const sale = await saleController.update(
		req.params.id, req.body
	);

	return res.json(sale);
});

saleRouters.delete('/:id', async (req, res) => {
	const sale = await saleController.delete(
		req.params.id
	);

	return sale;
});

export default saleRouters;