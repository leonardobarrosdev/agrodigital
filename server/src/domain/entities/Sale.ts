import { Product } from './Product';
import { Message } from './Message';

export class Sale extends Message {
    private salesNumber?: number;
    private avaliation: int;
    private discountPercent: float;
    private products: Product[];

    viewProducts(): Promisse<Product[]> {
        return this.products.getAll();
    }

    popularDeals(): Promisse<Sale> {
        // return all sales whit discont
    }

    setDiscount(discountPercent: float) Promisse<void> {
        this.discountPercent = discountPercent;
    }

    dealsInAllProducts(id: string) Promisse<void> {
        //
    }

    setDealsInAllProducts(discountPercent: float) Promisse<void> {
        setDiscount(discountPercent);
    }
}
