import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CategoryGateway } from "../../models/category/gateway/category.gateway";
import { ICategoryModel } from "../../models/category/category.models";
import { catchError } from 'rxjs/operators'

@Injectable()
export class CategoryUseCase {
    constructor(private categoryGateway: CategoryGateway) {}

    getAllCategories(): Observable<ICategoryModel[]> {
        return this.categoryGateway.getAllCategories().pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    getCategoryById(id: string): Observable<ICategoryModel> {
        return this.categoryGateway.getCategoryById(id).pipe(
            catchError((err) => {
                return of(err.error);
            })
        );
    }
}
