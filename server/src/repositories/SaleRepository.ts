import { Sale } from '../models/Sale';
import AppDataSource from '../database/data-source'

interface ISale {
	id?: string;
	title: string;
	message: string;
	salesNumber?: number;
	created_at?: Date;
	updated_at?: Date;
}

export default class SaleRepository {
	private manager = AppDataSource.manager;

	constructor() {}

	async create({
		title, message
	}: ISale): Promise<Sale> {
		const sale = new Sale();

		sale.title = title;
		sale.message = message;
		sale.salesNumber = 0;
		sale.created_at = new Date();
		sale.updated_at = new Date();

		await this.manager.save(sale);

		return sale;
	}

	async getAll(): Promise<Sale[]> {
		const sale = await this.manager.find(Sale);

		return sale;
	}

  async findById(id: string): Promise<Sale> {
  	const sale = await this.manager.findOneBy(Sale, {
  		id: id
  	});

  	return sale;
  }

  async findByTitle(title: string): Promise<Sale[]> {
  	const sale = await this.manager.findBy(Sale, {
  		title: title
  	});

  	return sale;
  }

  async update(id: string, sale: ISale): Promise<Sale> {
  	const sl = await this.findById(id);

  	for(let attribute in sale) {
  		if(sl[`${attribute}`] !== attribute) {
  			sl[`${attribute}`] = attribute;
  		}
  	}

  	sl.updated_at = new Date();

  	await this.manager.save(sl);

  	return sl;
  }

  async delete(id: string): Promise<boolean> {
  	const sale = await this.findById(id);

  	if(!sale) return false;

  	await this.manager.remove(sale);

  	return true;
  }
}