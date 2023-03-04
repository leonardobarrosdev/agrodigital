import Product from '../entities/Product';

export interface IProductRepository {
	getAll(): Promisse<Product[]>;
	getById(id: string): Promise<Product>;
	getByName(name: string): Promise<Product[]>;
	create(product: IProduct): Promise<Product>;
	update(id: string, product: IProduct): Promise<Product>;
	delete(id: string): Promise<boolean>;
}