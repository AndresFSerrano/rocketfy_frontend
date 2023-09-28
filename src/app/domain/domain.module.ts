import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryUseCase } from './usecases/category/category.usecase';
import { ProductUseCase } from './usecases/product/product.usecase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],providers:[
    CategoryUseCase,
    ProductUseCase
  ]
})
export class DomainModule { }
