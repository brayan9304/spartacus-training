import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CmsComponentData, FooterNavigationComponent, NavigationNode, NavigationService } from '@spartacus/storefront';

@Component({
  selector: 'cx-footer-navigation',
  templateUrl: './tc-custom-footer.component.html',
  styleUrls: ['./tc-custom-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterCustomNavigationComponent extends FooterNavigationComponent implements OnInit{
  panelOpenState = false;
  node$: Observable<any> = this.service.getNavigationNode(
    this.componentData.data$
  );

  styleClass$: Observable<string> = this.componentData.data$.pipe(
    map((d) => d?.styleClass)
  );

  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {
    super(componentData,service);
  }
  ngOnInit(): void {
  }

}
