import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcPageContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'tc-page-container-component',
  templateUrl: './tc-page-container-component.component.html',
  styleUrls: ['./tc-page-container-component.component.scss']
})
export class TcPageContainerComponent implements OnInit {

  /*componentData$: Observable<TcPageContainerModel> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcPageContainerModel>) {}

  ngOnInit(): void {}*/
  /*inView(ele:any){
    ele.scrollIntoView({behavior:"smooth",block:"start",inline:"start"});
  }

  onClick(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'}), 0);
    }
  }*/

  containerData$: Observable<TcPageContainerModel> = this.containerData.data$;
  cards$: Observable<any[]> = this.componentDataCards.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.cards.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );
  sidebars$: Observable<any[]> = this.componentDataSidebars.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.sidebars.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );

  constructor(private containerData: CmsComponentData<TcPageContainerModel>, 
              public componentDataCards: CmsComponentData<any>,
              public componentDataSidebars: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
