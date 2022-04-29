import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCartComponent } from './tc-cart.component';

describe('TcCartComponent', () => {
  let component: TcCartComponent;
  let fixture: ComponentFixture<TcCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
