import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSaveForLaterComponent } from './tc-save-for-later.component';

describe('TcSaveForLaterComponent', () => {
  let component: TcSaveForLaterComponent;
  let fixture: ComponentFixture<TcSaveForLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcSaveForLaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSaveForLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
