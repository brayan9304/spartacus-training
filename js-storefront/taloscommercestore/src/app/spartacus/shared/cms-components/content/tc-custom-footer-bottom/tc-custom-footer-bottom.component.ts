import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CmsComponentData, FooterNavigationComponent, ICON_TYPE, NavigationNode, NavigationService } from '@spartacus/storefront';

@Component({
    selector: 'cx-footer-bottom-navigation',
    templateUrl: './tc-custom-footer-bottom.component.html',
    styleUrls: ['./tc-custom-footer-bottom.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFooterBottomComponent extends FooterNavigationComponent implements OnInit {
    iconType = ICON_TYPE;
    panelOpenState = false;
    node$: Observable<NavigationNode> = this.service.getNavigationNode(
        this.componentData.data$
    );

    styleClass$: Observable<string> = this.componentData.data$.pipe(
        map((d) => d?.styleClass)
    );

    constructor(
        protected componentData: CmsComponentData<CmsNavigationComponent>,
        protected service: NavigationService
    ) {
        super(componentData, service);
    }
    ngOnInit(): void {
    }

}
