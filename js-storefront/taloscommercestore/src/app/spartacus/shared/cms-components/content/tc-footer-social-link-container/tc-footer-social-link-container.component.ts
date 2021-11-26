import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcFooterSocialLinkContainerModel } from '@tc-model';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-footer-social-link-container',
  templateUrl: './tc-footer-social-link-container.component.html',
  styleUrls: ['./tc-footer-social-link-container.component.scss']
})
export class TcFooterSocialLinkContainerComponent implements OnInit {


  containerData$: Observable<TcFooterSocialLinkContainerModel> = this.containerData.data$;
  links$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.links.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component)
        )
      )
    )
  );



  constructor(private containerData: CmsComponentData<TcFooterSocialLinkContainerModel>, 
              public componentData: CmsComponentData<any>,
              private cmsService: CmsService
              ) { }

  ngOnInit(): void {
  }

}
