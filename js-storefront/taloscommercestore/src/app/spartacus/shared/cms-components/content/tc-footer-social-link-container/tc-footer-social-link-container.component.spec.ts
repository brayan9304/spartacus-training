import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcFooterSocialLinkContainerComponent } from './tc-footer-social-link-container.component';

describe('TcFooterSocialLinkContainerComponent', () => {
  let component: TcFooterSocialLinkContainerComponent;
  let fixture: ComponentFixture<TcFooterSocialLinkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcFooterSocialLinkContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcFooterSocialLinkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
