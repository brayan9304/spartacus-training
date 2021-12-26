import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCustomCardContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-custom-card-container',
  templateUrl: './tc-custom-card-container-component.component.html',
  styleUrls: ['./tc-custom-card-container-component.component.scss']
})
export class TcCustomCardContainerComponent implements OnInit {


  containerData$: Observable<TcCustomCardContainerModel> = this.containerData.data$;
  items$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.page2Items.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );

  constructor(private containerData: CmsComponentData<TcCustomCardContainerModel>, 
              public componentData: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
