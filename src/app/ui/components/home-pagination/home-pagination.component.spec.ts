import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaginationComponent } from './home-pagination.component';

describe('HomePaginationComponent', () => {
  let component: HomePaginationComponent;
  let fixture: ComponentFixture<HomePaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePaginationComponent]
    });
    fixture = TestBed.createComponent(HomePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
