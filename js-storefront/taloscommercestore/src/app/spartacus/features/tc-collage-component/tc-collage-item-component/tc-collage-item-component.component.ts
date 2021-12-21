import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCollageItemModel } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-collage-item',
  templateUrl: './tc-collage-item-component.component.html',
  styleUrls: ['./tc-collage-item-component.component.scss']
})
export class TcCollageItemComponent implements OnInit {

  componentData$: Observable<TcCollageItemModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcCollageItemModel>) {}

  ngOnInit(): void {}

}
