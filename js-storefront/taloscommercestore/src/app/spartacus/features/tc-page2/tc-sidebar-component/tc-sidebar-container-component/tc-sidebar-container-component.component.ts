import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData, ICON_TYPE } from '@spartacus/storefront';
import { TcSidebarContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-sidebar-container',
  templateUrl: './tc-sidebar-container-component.component.html',
  styleUrls: ['./tc-sidebar-container-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class TcSidebarContainerComponent implements OnInit {
  dropDown: boolean = false;
  size:any;
  iconTypes = ICON_TYPE;

  onResize(event) {
    this.size = window.innerWidth;
    this.WindowSize(this.size);
}

  WindowSize(size){
    if (size >= 768){
        this.dropDown = true;
    }else{
        this.dropDown = false;
    }
  }

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
    this.size = window.innerWidth;
    this.WindowSize(this.size);
  }

  onClick(){
    this.dropDown = !this.dropDown;
  }

}
