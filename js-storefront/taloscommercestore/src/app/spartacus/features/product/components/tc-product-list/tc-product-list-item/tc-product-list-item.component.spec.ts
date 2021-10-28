import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcProductListItemComponent } from './tc-product-list-item.component';

describe('TcProductListItemComponent', () => {
  let component: TcProductListItemComponent;
  let fixture: ComponentFixture<TcProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcProductListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
