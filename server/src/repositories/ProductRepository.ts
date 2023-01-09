import { Product } from '../models/Product'
import AppDataSource from '../database'

interface IProduct {
	id?: string;
	code?: string;
	name: string;
	typeProduct: string;
	photo: string;
	price: number;
	description: string;
	address: string;
	updated_at?: Date;
}

export default class ProductRepository {
	private manager = AppDataSource.manager;

	constructor() {}

	async create({
		name, typeProduct, photo, price, description, address
	}: IProduct): Promise<Product> {
		const product = new Product(
			name, typeProduct, photo, price, description, address
		);

		await this.manager.save(product);

		return product;
	}

	async getAll(): Promise<Product[]> {
		const product = await this.manager.find(Product);

		return product;
	}

	async findById(id: string): Promise<Product> {
		const product = await this.manager.findOneBy(Product, {
			code: id
		});

		return product;
	}

	async findByName(name: string): Promise<Product[]> {
		const product = await this.manager.find(Product, {
			where: {
				name: name,
			},
		});

		return product;
	}

	async update(code: string, product: IProduct): Promise<Product> {
		const prod = await this.findById(code);

		for(let attribute in product) {
			if(prod[`${attribute}`] !== attribute) {
				prod[`${attribute}`] = attribute;
			}
		}

		prod.updated_at = new Date();

		await this.manager.save(product);

		return prod;
	}

	async delete(id: string): Promise<boolean> {
		const product = await this.findById(id);

		if(!product) return false;

		await this.manager.remove(product);

		return (await this.findById(id))? true : false;
	}
}