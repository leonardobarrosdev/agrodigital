import { Sale } from '../models/Sale';
import AppDataSource from '../database'

interface ISale {
	title: string;
	message: string;
	salesNumber?: number;
	updated_at?: Date;
}

export default class SaleRepository {
	private manager = AppDataSource.manager;

	constructor() {}

	async getAll(): Promise<Sale[]> {
		const sales = await this.manager.find(Sale);

		return sales;
	}

  async getById(id: string): Promise<Sale> {
  	const sale = await this.manager.findOneBy(Sale, {
  		id: id
  	});

  	return sale;
  }

  async getByTitle(title: string): Promise<Sale[]> {
  	const sale = await this.manager.findBy(Sale, {
  		title: title
  	});

  	return sale;
  }

  async create(sale: ISale): Promise<Sale> {
		const sl = new Sale();

		for(const key in sale)
			sl[`${key}`] = sale[`${key}`];

		sl.salesNumber = 0;

		await this.manager.save(sl);

		return sl;
	}

  async update(id: string, content?: ISale): Promise<Sale> {
  	const sale = await this.getById(id);

  	for(let key in content) {
  		if(sale[`${key}`] !== content[`${key}`]) {
  			sale[`${key}`] = content[`${key}`];
  		}
  	}

  	sale.updated_at = new Date();

  	await this.manager.save(sale);

  	return sale;
  }

  async delete(id: string): Promise<boolean> {
  	const sale = await this.getById(id);

  	if(!sale) return false;

  	await this.manager.remove(sale);

  	return true;
  }
}