import { Product } from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';
import { NotFoundError, AppError } from '../utils/AppError';

interface IProduct {
	code?: string;
	name: string;
	typeProduct: string;
	photo: string;
	price: number;
	description: string;
	address: string;
	updated_at?: Date;
	owner?: string;
	sales?: string;
	chat?: string;
	chats?: string[];
}

export default class ProductController {
	constructor(private productRepository: ProductRepository) {}

	async getProducts(): Promise<Product[]> {
		const products = await this.productRepository.getAll();

		if(!products || products.length === 0) {
			throw new NotFoundError('Não há produtos.');
		}

		return products;
	}

	async getById(id: string): Promise<Product> {
		const product = await this.productRepository.findById(id);

		if(!product) {
			throw new NotFoundError('Produto não encontrado.');
		}

		return product;
	}

	async getByName(name: string): Promise<Product[]> {
		const products = await this.productRepository.findByName(name);

		if(!products) {
			throw new NotFoundError('Produto não encontrado.');
		}

		return products;
	}

	async create(product: IProduct): Promise<Product> {
		const prod = await this.productRepository.create(product);

		return prod;
	}
	
	async update(code: string, product: IProduct): Promise<Product> {
		if(!await this.productRepository.findById(code)) {
			throw new NotFoundError('Produto não existe.');
		}

		const prod = await this.productRepository.update(code, product);

		return prod;
	}

	async delete(id: string): Promise<boolean> {
		const result = await this.productRepository.delete(id);

		if(!result) {
			throw new NotFoundError('Produto não encontrado.');
		}

		return result;
	}
}