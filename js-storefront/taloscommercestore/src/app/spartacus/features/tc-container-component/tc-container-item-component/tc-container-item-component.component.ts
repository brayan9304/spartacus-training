import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCustomSimpleItemModel } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-container-item',
  templateUrl: './tc-container-item-component.component.html',
  styleUrls: ['./tc-container-item-component.component.scss']
})
export class TcContainerItemComponent implements OnInit {

  componentData$: Observable<TcCustomSimpleItemModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcCustomSimpleItemModel>) {}

  ngOnInit(): void {}

}
