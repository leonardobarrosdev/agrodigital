import { Router } from 'express';

import ProductRepository from '../repositories/ProductRepository'
import ProductController from '../controllers/ProductController';

const productRouters = Router();
const productRepository = new ProductRepository();
const productController = new ProductController(productRepository);

productRouters.get('/', async (req, res) => {
	const products = await productController.getProducts();

	return res.json(products);
});

productRouters.get('/:id', async (req, res) => {
	const product = await productController.getById(
		req.params.id
	);

	return res.json(product)
});

productRouters.get('/:name', async (req, res) => {
	const products = await productController.getByName(
		req.params.name
	);

	return res.json(products);
});

productRouters.post('/cadastrar', async (req, res) => {
	const product = await productController.create(
		req.body
	);

	return res.json(product);
})

productRouters.patch('/editar/:id', async (req, res) => {
	const product = await productController.update(
		req.params.id, req.body
	);

	return res.json(product);
});

productRouters.delete('/excluir/:id', async (req, res) => {
	const result = await productController.delete(
		req.params.id
	);

	return (result)? res.json('Ok') : res.json('Não foi possível excluir');
});

export default productRouters;