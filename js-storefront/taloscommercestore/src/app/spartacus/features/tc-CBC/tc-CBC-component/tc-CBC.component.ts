import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCBCModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-CBC',
  templateUrl: './tc-CBC.component.html',
  styleUrls: ['./tc-CBC.component.scss']
})
export class TcCBC implements OnInit {
  containerData$: Observable<TcCBCModel> = this.containerData.data$;
  items$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.CI.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );

  constructor(private containerData: CmsComponentData<TcCBCModel>, 
              public componentData: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
