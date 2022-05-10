import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCartItemComponent } from './tc-cart-item.component';

describe('TcCartItemComponent', () => {
  let component: TcCartItemComponent;
  let fixture: ComponentFixture<TcCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
