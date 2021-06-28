import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcReferredCustomerListComponent } from './tc-referred-customer-list.component';

describe('TcReferredCustomerListComponent', () => {
  let component: TcReferredCustomerListComponent;
  let fixture: ComponentFixture<TcReferredCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TcReferredCustomerListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcReferredCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
