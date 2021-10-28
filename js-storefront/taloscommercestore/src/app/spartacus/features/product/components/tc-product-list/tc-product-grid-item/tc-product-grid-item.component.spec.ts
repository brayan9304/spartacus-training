import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcProductGridItemComponent } from './tc-product-grid-item.component';

describe('TcProductGridItemComponent', () => {
  let component: TcProductGridItemComponent;
  let fixture: ComponentFixture<TcProductGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcProductGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcProductGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
