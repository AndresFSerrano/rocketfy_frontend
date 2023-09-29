import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPaginationSetup } from 'src/app/domain/models/product/product.models';

@Component({
  selector: 'app-home-pagination',
  templateUrl: './home-pagination.component.html',
  styleUrls: ['./home-pagination.component.css']
})
export class HomePaginationComponent {
  @Input() paginationSetup!: IPaginationSetup;
  @Output() nextPageClicked = new EventEmitter<number>();
  @Output() previousPageClicked = new EventEmitter<number>();

  onNextPageClicked() {
    if (this.paginationSetup.page) {
      this.nextPageClicked.emit(this.paginationSetup.page + 1);
    }
  }

  onPrevPageClicked() {
    if (this.paginationSetup.page && this.paginationSetup.page > 1) {
      this.previousPageClicked.emit(this.paginationSetup.page - 1);
    }
  }
}
