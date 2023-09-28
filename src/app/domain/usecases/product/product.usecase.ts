import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductGateway } from "../../models/product/gateway/product.gateway";
import { IProductModel, IPaginationProductModel } from "../../models/product/product.models";
import { catchError } from 'rxjs/operators'

@Injectable()
export class ProductUseCase {
    constructor(private productGateway: ProductGateway) {}

    getAllProducts(): Observable<IProductModel[]> {
        return this.productGateway.getAllProducts().pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    getProductById(id: string): Observable<IProductModel> {
        return this.productGateway.getProductById(id).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    deleteProductById(id: string): Observable<{ message: string }> {
        return this.productGateway.deleteProductById(id).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    editProductById(id: string, updatedProductData: any): Observable<IProductModel> {
        return this.productGateway.editProductById(id, updatedProductData).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    getAllProductsPaginated(page: number): Observable<IPaginationProductModel> {
        return this.productGateway.getAllProductsPaginated(page).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    addCategoryToProduct(productId: string, categoryId: string): Observable<IProductModel> {
        return this.productGateway.addCategoryToProduct(productId, categoryId).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    removeCategoryFromProduct(productId: string, categoryId: string): Observable<IProductModel> {
        return this.productGateway.removeCategoryFromProduct(productId, categoryId).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }
}
