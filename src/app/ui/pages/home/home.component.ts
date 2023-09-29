import { Component, OnInit, Output } from '@angular/core';
import { ProductUseCase } from 'src/app/domain/usecases/product/product.usecase';
import { IPaginationProductModel, IPaginationSetup, IProductModel } from 'src/app/domain/models/product/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paginationResponse?: IPaginationProductModel;
  products: IProductModel[] =[];
  paginationSetup!: IPaginationSetup;
  constructor(private productUseCase: ProductUseCase) { }
  selectedProduct !: IProductModel;
  isModalOpen = false;

  ngOnInit(): void {
    this.loadPage(1);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  loadPage(pageNumber: number) {
    this.productUseCase.getAllProductsPaginated(pageNumber).subscribe(
      (data) => {
        const { products, ...rest } = data;
        this.paginationResponse = data;
        this.products = products;
        this.paginationSetup = rest;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  handleNextPageClick(page: number) {
    this.loadPage(page);
  }

  handlePreviousPageClick(page: number) {
    this.loadPage(page);
  }

  openModal(product: IProductModel) {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }
  
}

