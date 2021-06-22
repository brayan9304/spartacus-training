import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSplitViewBannerComponent } from './tc-split-view-banner.component';

describe('TcSplitViewBannerComponent', () => {
  let component: TcSplitViewBannerComponent;
  let fixture: ComponentFixture<TcSplitViewBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcSplitViewBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSplitViewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
