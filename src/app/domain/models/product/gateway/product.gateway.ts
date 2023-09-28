import { Observable } from "rxjs";
import { IProductModel, IPaginationProductModel } from "../product.models";

export abstract class ProductGateway {
    abstract getAllProducts(): Observable<IProductModel[]>;

    abstract getProductById(id: string): Observable<IProductModel>;

    abstract deleteProductById(id: string): Observable<{ message: string }>;

    abstract editProductById(id: string, updatedProductData: any): Observable<IProductModel>;

    abstract getAllProductsPaginated(page: number): Observable<IPaginationProductModel>;

    abstract addCategoryToProduct(productId: string, categoryId: string): Observable<IProductModel>;

    abstract removeCategoryFromProduct(productId: string, categoryId: string): Observable<IProductModel>;
}
