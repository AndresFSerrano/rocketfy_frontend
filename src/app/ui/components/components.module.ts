import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DomainModule } from 'src/app/domain/domain.module';
import { CategoryGateway } from 'src/app/domain/models/category/gateway/category.gateway';
import { CategoryUseCase } from 'src/app/domain/usecases/category/category.usecase';
import { ProductUseCase } from 'src/app/domain/usecases/product/product.usecase';
import { ProductGateway } from 'src/app/domain/models/product/gateway/product.gateway';
import { CategoryService } from 'src/app/infrastructure/driver-adapter/category/category.service';
import { ProductService } from 'src/app/infrastructure/driver-adapter/product/product.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { TitleComponent } from './title/title.component';
import { HomePaginationComponent } from './home-pagination/home-pagination.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

const categoryCreaterUseCaseFactory = (categoryGateway : CategoryGateway) => new CategoryUseCase(categoryGateway);
export const categoryCreaterUseCaseProvider = {
  provide: CategoryGateway,
  useFactory: categoryCreaterUseCaseFactory,
  deps: [CategoryGateway]
}

const productCreaterUseCaseFactory = (productGateway : ProductGateway) => new ProductUseCase(productGateway);
export const productCreaterUseCaseProvider = {
  provide: ProductGateway,
  useFactory: productCreaterUseCaseFactory,
  deps: [ProductGateway]
}

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    CardComponent,
    ModalProductComponent,
    TitleComponent,
    HomePaginationComponent
  ],
  imports: [
    CommonModule,
    DomainModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [categoryCreaterUseCaseProvider,
    {provide: CategoryGateway, useClass: CategoryService}, productCreaterUseCaseProvider,{provide: ProductGateway, useClass: ProductService}],
  exports: [MenuComponent,
  FooterComponent,
  CardComponent,
  TitleComponent,
  HomePaginationComponent,
  ModalProductComponent]
})
export class ComponentsModule { }
