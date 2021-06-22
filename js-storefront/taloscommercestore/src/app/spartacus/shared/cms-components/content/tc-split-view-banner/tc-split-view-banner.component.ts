import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TcSplitViewBannerModel } from '@tc-model';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-split-view-banner',
  templateUrl: './tc-split-view-banner.component.html',
  styleUrls: ['./tc-split-view-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcSplitViewBannerComponent implements OnInit {
  componentData$: Observable<TcSplitViewBannerModel> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<TcSplitViewBannerModel>) {}

  ngOnInit(): void {}
}
