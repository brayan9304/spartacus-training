import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcFooterSocialLinkModel } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-footer-social-link',
  templateUrl: './tc-footer-social-link.component.html',
  styleUrls: ['./tc-footer-social-link.component.scss']
})
export class TcFooterSocialLinkComponent implements OnInit {

  componentData$: Observable<TcFooterSocialLinkModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcFooterSocialLinkModel>) {}

  ngOnInit(): void {}

}
