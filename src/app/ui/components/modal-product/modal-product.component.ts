import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductModel, IProductModeltoUpdate } from 'src/app/domain/models/product/product.models';
import { ProductUseCase } from 'src/app/domain/usecases/product/product.usecase'; 
import { CategoryUseCase } from 'src/app/domain/usecases/category/category.usecase';
import { ICategoryModel } from 'src/app/domain/models/category/category.models';
import { delay } from 'rxjs';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit {
  @Input() product!: IProductModel;
  @Output() closeModalEvent = new EventEmitter<void>();
  editForm: FormGroup;
  categories: ICategoryModel[] = [];
  selectedCategories: string[] = [];

  ngOnInit() {
    this.categoryUseCase.getAllCategories().subscribe(
      result =>{
        this.categories = result;
        console.log(result);
      }
    )
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private productUseCase: ProductUseCase,
    private categoryUseCase: CategoryUseCase
  ) {
    this.editForm = this.formBuilder.group({
      PRODUCT_NAME: ['', Validators.required],
      PRODUCT_SKU: ['', Validators.required],
      PRODUCT_IMAGE: ['', Validators.required],
      PRODUCT_CATEGORIES_ID: ['', Validators.required],
      PRODUCT_PRICE: [0, Validators.required],
      PRODUCT_STOCK_QTY: [0, Validators.required],
      PRODUCT_DESCRIPTION: ['', Validators.required]
    });
  }

  closeModal() {
    this.closeModalEvent.emit(); 
  }

  submitUpdateProduct(){
    this.saveChanges();
  }

  saveChanges(){
    const newProduct : IProductModeltoUpdate = 
    {PRODUCT_NAME: this.editForm.value.PRODUCT_NAME, 
      PRODUCT_DESCRIPTION: this.editForm.value.PRODUCT_DESCRIPTION,
      PRODUCT_SKU: this.editForm.value.PRODUCT_SKU,
      PRODUCT_IMAGE : this.editForm.value.PRODUCT_IMAGE,
      PRODUCT_PRICE : this.editForm.value.PRODUCT_PRICE,
      PRODUCT_CATEGORIES_ID : this.editForm.value.PRODUCT_CATEGORIES_ID,
      PRODUCT_STOCK_QTY: this.editForm.value.PRODUCT_STOCK_QTY};
      
    this.productUseCase.editProductById(this.product._id,newProduct).subscribe(
      result =>{
        console.log(result);
      }
    )
  }

  toggleCategory(categoryId: string) {
    if (this.isSelected(categoryId)) {
      this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
    } else {
      this.selectedCategories.push(categoryId);
    }
  }
  
  isSelected(categoryId: string): boolean {
    return this.selectedCategories.includes(categoryId);
  }
}
