import { Product } from '../models/Product'
import AppDataSource from '../database'

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

export default class ProductRepository {
	private manager = AppDataSource.manager;

	constructor() {}

	async getAll(): Promise<Product[]> {
		const product = await this.manager.find(Product);

		return product;
	}

	async findById(id: string): Promise<Product> {
		const product = await this.manager.findOneBy(Product, {
			code: id
		});
		console.log(product);

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

	async create(product: IProduct): Promise<Product> {
		const newProduct = new Product();

		for(const key in product) {
			newProduct[`${key}`] = product[`${key}`];
		}

		await this.manager.save(newProduct);

		return newProduct;
	}

	async update(id: string, product: IProduct): Promise<Product> {
		const prod = await this.findById(id);

		for(let key in product) {
			if(prod[`${key}`] !== product[`${key}`]) {
				prod[`${key}`] = product[`${key}`];
			}
		}

		prod.updated_at = new Date();

		await this.manager.save(prod);

		return prod;
	}

	async delete(id: string): Promise<boolean> {
		const product = await this.findById(id);
		
		if(product === null) return false;

		await this.manager.remove(product);

		// result = (await this.findById(id))? true : false;

		return true;
	}
}