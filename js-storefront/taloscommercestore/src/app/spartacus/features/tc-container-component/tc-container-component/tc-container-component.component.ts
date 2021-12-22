import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-container',
  templateUrl: './tc-container-component.component.html',
  styleUrls: ['./tc-container-component.component.scss']
})
export class TcContainerComponent implements OnInit {
  containerData$: Observable<TcContainerModel> = this.containerData.data$;
  items$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.containerItems.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );

  constructor(private containerData: CmsComponentData<TcContainerModel>, 
              public componentData: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
