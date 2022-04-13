import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCompareButtonComponent } from './tc-compare-button.component';

describe('TcCompareButtonComponent', () => {
  let component: TcCompareButtonComponent;
  let fixture: ComponentFixture<TcCompareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCompareButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCompareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
