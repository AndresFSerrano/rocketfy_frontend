import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryGateway } from '../../../domain/models/category/gateway/category.gateway'; 
import { ICategoryModel } from '../../../domain/models/category/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CategoryGateway {
  private CATEGORY_URL_BASE: string = `app_7f379359-3c4c-41b1-bbcc-0b79ad222550/api/category/`; 

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  });

  constructor(private http: HttpClient) {
    super();
  }

  getAllCategories(): Observable<ICategoryModel[]> {
    return this.http.get<ICategoryModel[]>(this.CATEGORY_URL_BASE, { headers: this.httpHeaders });
  }

  getCategoryById(id: string): Observable<ICategoryModel> {
    return this.http.get<ICategoryModel>(this.CATEGORY_URL_BASE + id, { headers: this.httpHeaders });
  }
}
