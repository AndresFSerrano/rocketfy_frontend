import { Observable } from "rxjs";
import { ICategoryModel } from '../category.models';

export abstract class CategoryGateway {
    abstract getAllCategories(): Observable<ICategoryModel[]>;

    abstract getCategoryById(id: string): Observable<ICategoryModel>;
}
