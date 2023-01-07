import { Sale } from '../models/Sale';
import SaleRepository from '../repositories/SaleRepository';
import { NotFoundError } from '../utils/AppError';

interface ISale {
	id?: string;
	title: string;
	message: string;
	salesNumber?: string;
	created_at?: string;
	updated_at?: string;
}

export default class SaleController {
	constructor(private saleRepository: SaleRepository) {}

	async create({
		title, message
	}: ISale): Promise<Sale> {
		const sale = await this.saleRepository.create({
			title, message
		});

		if(sale) throw new NotFoundError('Venda já existe (Título).');

		return sale;
	}

	async getAll(): Promise<Sale[]> {
		const sales = await this.saleRepository.getAll();

		if(!sales) {
			throw new NotFoundError('Vendas ñão registradas.')
		}

		return sales;
	}

	async getById(id: string): Promise<Sale> {
		const sale = await this.saleRepository.findById(id);

		if(!sale) throw new NotFoundError('Venda não encontrada.');

		return sale;
	}

	async update(id: string, {
		title, message
	}: ISale): Promise<Sale> {
		const sl = this.saleRepository.findById(id);

		if(!sl) throw new NotFoundError('Venda não encontrada.');

		return await this.saleRepository.update(id, {title, message});
	}

	async delete(id: string): Promise<boolean> {
		return await this.saleRepository.delete(id);
	}
}