import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPE, NavigationNode } from '@spartacus/storefront';

@Component({
    selector: 'cx-custom-navigation-ui',
    templateUrl: './tc-custom-navigation-component.component.html',
    styleUrls: ['./tc-custom-navigation-component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomNavigationUIComponent {
    @Input() node: NavigationNode;
    iconType = ICON_TYPE;
}
