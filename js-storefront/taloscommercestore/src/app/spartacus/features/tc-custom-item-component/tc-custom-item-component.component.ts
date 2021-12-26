import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCustomItemModel } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-custom-item-component',
  templateUrl: './tc-custom-item-component.component.html',
  styleUrls: ['./tc-custom-item-component.component.scss']
})
export class TcCustomItemComponent implements OnInit {

  componentData$: Observable<TcCustomItemModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcCustomItemModel>) {}

  ngOnInit(): void {}
}
