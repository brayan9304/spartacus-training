import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCardContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-card-container',
  templateUrl: './tc-card-container-component.component.html',
  styleUrls: ['./tc-card-container-component.component.scss']
})
export class TcCardContainerComponent implements OnInit {


  containerData$: Observable<TcCardContainerModel> = this.containerData.data$;
  items$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.items.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );

  constructor(private containerData: CmsComponentData<TcCardContainerModel>, 
              public componentData: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
