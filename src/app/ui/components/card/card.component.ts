import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from 'src/app/domain/models/product/product.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product!: IProductModel;
  @Output() editProductClicked = new EventEmitter<IProductModel>();

  onEditClick() {
    this.editProductClicked.emit(this.product);
  }
}
