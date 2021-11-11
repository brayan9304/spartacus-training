import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSavedListSearchBarComponent } from './tc-saved-list-search-bar.component';

describe('TcSavedListSearchBarComponent', () => {
  let component: TcSavedListSearchBarComponent;
  let fixture: ComponentFixture<TcSavedListSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcSavedListSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSavedListSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
