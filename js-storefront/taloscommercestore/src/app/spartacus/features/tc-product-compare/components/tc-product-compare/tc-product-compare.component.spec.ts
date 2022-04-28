import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcProductCompareComponent } from './tc-product-compare.component';

describe('TcProductCompareComponent', () => {
  let component: TcProductCompareComponent;
  let fixture: ComponentFixture<TcProductCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcProductCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcProductCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
