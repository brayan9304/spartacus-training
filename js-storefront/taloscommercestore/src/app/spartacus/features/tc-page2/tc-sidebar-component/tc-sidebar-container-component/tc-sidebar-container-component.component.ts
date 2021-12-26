import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcSidebarContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-sidebar-container',
  templateUrl: './tc-sidebar-container-component.component.html',
  styleUrls: ['./tc-sidebar-container-component.component.scss']
})
export class TcSidebarContainerComponent implements OnInit {


  containerData$: Observable<TcSidebarContainerModel> = this.containerData.data$;
  items$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.links.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );

  constructor(private containerData: CmsComponentData<TcSidebarContainerModel>, 
              public componentData: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
