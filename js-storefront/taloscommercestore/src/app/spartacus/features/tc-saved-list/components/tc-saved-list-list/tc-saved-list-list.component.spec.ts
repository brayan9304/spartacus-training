import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSavedListListComponent } from './tc-saved-list-list.component';

describe('TcSavedListListComponent', () => {
  let component: TcSavedListListComponent;
  let fixture: ComponentFixture<TcSavedListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcSavedListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSavedListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
