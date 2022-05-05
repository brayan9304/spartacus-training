import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCartItemListComponent } from './tc-cart-item-list.component';

describe('TcCartItemListComponent', () => {
  let component: TcCartItemListComponent;
  let fixture: ComponentFixture<TcCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCartItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
