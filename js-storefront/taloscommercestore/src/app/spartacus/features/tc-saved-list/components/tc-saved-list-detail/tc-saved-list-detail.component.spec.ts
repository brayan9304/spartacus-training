import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSavedListDetailComponent } from './tc-saved-list-detail.component';

describe('TcSavedListDetailComponent', () => {
  let component: TcSavedListDetailComponent;
  let fixture: ComponentFixture<TcSavedListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcSavedListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSavedListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
