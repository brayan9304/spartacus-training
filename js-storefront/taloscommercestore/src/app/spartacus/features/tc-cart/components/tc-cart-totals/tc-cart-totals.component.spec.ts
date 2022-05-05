import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCartTotalsComponent } from './tc-cart-totals.component';

describe('TcCartTotalsComponent', () => {
  let component: TcCartTotalsComponent;
  let fixture: ComponentFixture<TcCartTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCartTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCartTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
