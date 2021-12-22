import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCSIModel } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-CSI',
  templateUrl: './tc-CSI.component.html',
  styleUrls: ['./tc-CSI.component.scss']
})
export class TcCSI implements OnInit {

  componentData$: Observable<TcCSIModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcCSIModel>) {}

  ngOnInit(): void {}

}
