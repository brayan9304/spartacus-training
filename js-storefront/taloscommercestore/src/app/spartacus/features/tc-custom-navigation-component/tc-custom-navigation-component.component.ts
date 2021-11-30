import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICON_TYPE, NavigationNode } from '@spartacus/storefront';
import { fromEvent, Observable, ReplaySubject, Subscription } from 'rxjs';

@Component({
    selector: 'cx-custom-navigation-ui',
    templateUrl: './tc-custom-navigation-component.component.html',
    styleUrls: ['./tc-custom-navigation-component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class CustomNavigationUIComponent implements OnInit{

    panelOpenState = false;
    @Input() node: NavigationNode;
    iconType = ICON_TYPE;
    flag: boolean;
    size: any;
    //size = event.target.innerWidth;

    
    WindowSize(size){
        if (size < 992){
            this.flag = true;
        }else{
            this.flag = false;
        }
    }

    onResize(event) {
        this.size = window.innerWidth;
        this.WindowSize(this.size);
    }

    ngOnInit(): void{
        this.size = window.innerWidth;
        this.WindowSize(this.size);
    }
}
