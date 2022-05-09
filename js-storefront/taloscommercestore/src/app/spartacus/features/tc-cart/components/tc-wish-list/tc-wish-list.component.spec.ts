import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcWishListComponent } from './tc-wish-list.component';

describe('TcWishListComponent', () => {
  let component: TcWishListComponent;
  let fixture: ComponentFixture<TcWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
