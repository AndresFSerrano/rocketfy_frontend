import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductGateway } from '../../../domain/models/product/gateway/product.gateway'; 
import { IPaginationProductModel, IProductModel } from 'src/app/domain/models/product/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ProductGateway {
  private PRODUCT_URL_BASE: string = 'http://localhost:3030/api/product/';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  });

  constructor(private http: HttpClient) {
    super();
  }

  getAllProducts(): Observable<IProductModel[]> {
    return this.http.get<IProductModel[]>(this.PRODUCT_URL_BASE, { headers: this.httpHeaders });
  }

  getProductById(id: string): Observable<IProductModel> {
    return this.http.get<IProductModel>(this.PRODUCT_URL_BASE + id, { headers: this.httpHeaders });
  }

  deleteProductById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.PRODUCT_URL_BASE + id, { headers: this.httpHeaders });
  }

  editProductById(id: string, updatedProductData: any): Observable<IProductModel> {
    return this.http.put<IProductModel>(this.PRODUCT_URL_BASE + id, updatedProductData, { headers: this.httpHeaders });
  }

  getAllProductsPaginated(page: number): Observable<IPaginationProductModel> {
    return this.http.get<IPaginationProductModel>(this.PRODUCT_URL_BASE + 'paginated/' + page, { headers: this.httpHeaders });
  }

  addCategoryToProduct(productId: string, categoryId: string): Observable<IProductModel> {
    const body = { categoryId }; 
    return this.http.post<IProductModel>(this.PRODUCT_URL_BASE + productId + '/addCategory', body, { headers: this.httpHeaders });
  }

  removeCategoryFromProduct(productId: string, categoryId: string): Observable<IProductModel> {
    const body = { categoryId }; 
    return this.http.put<IProductModel>(this.PRODUCT_URL_BASE + productId + '/removeCategory', body, { headers: this.httpHeaders });
  }
}
