import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcReferredCustomerFormComponent } from './tc-referred-customer-form.component';

describe('TcReferredCustomerFormComponent', () => {
  let component: TcReferredCustomerFormComponent;
  let fixture: ComponentFixture<TcReferredCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcReferredCustomerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcReferredCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
