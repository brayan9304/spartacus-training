import { Component, OnInit } from '@angular/core';
import { CmsComponentData, ICON_TYPE } from '@spartacus/storefront';
import { TcCardItemModel } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-card-item',
  templateUrl: './tc-card-item-component.component.html',
  styleUrls: ['./tc-card-item-component.component.scss']
})
export class TcCardItemComponent implements OnInit {
  iconTypes = ICON_TYPE;
  componentData$: Observable<TcCardItemModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcCardItemModel>) {}

  ngOnInit(): void {}

}
