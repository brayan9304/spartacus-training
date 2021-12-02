import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcFooterSocialLinkComponent } from './tc-footer-social-link.component';

describe('TcFooterSocialLinkComponent', () => {
  let component: TcFooterSocialLinkComponent;
  let fixture: ComponentFixture<TcFooterSocialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcFooterSocialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcFooterSocialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
