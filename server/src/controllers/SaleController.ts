import { Sale } from '../models/Sale';
import SaleRepository from '../repositories/SaleRepository';
import { NotFoundError } from '../utils/AppError';

interface ISale {
	title: string;
	message: string;
	salesNumber?: number;
	updated_at?: Date;
}

export default class SaleController {
	constructor(private saleRepository: SaleRepository) {}

	async getAll(): Promise<Sale[]> {
		const sales = await this.saleRepository.getAll();

		if(!sales) {
			throw new NotFoundError('Vendas ñão registradas.');
		}

		return sales;
	}

	async getById(id: string): Promise<Sale> {
		const sale = await this.saleRepository.getById(id);

		if(!sale) throw new NotFoundError('Venda não encontrada.');

		return sale;
	}

	async getByTitle(title: string): Promise<Sale[]> {
		const sale = await this.saleRepository.getByTitle(title);

		if(!sale) {
			throw new NotFoundError('Vanda com este título não encontrada');
		}

		return sale;
	}

	async create(content: ISale): Promise<Sale> {
		const sale = await this.saleRepository.create(content);

		return sale;
	}

	async update(id: string, content?: ISale): Promise<Sale> {
		const sale = this.saleRepository.getById(id);

		if(!sale) throw new NotFoundError('Venda não encontrada.');

		return await this.saleRepository.update(id, content);
	}

	async delete(id: string): Promise<boolean> {
		return await this.saleRepository.delete(id);
	}
}