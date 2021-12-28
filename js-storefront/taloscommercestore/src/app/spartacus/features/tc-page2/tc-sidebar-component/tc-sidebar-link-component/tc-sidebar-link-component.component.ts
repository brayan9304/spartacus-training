import { ViewportScroller } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { CmsComponentData } from '@spartacus/storefront';
import { TcSidebarLink } from '@tc-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-sidebar-link',
  templateUrl: './tc-sidebar-link-component.component.html',
  styleUrls: ['./tc-sidebar-link-component.component.scss']
})
export class TcSidebarLinkComponent implements OnInit {

  componentData$: Observable<TcSidebarLink> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<TcSidebarLink>, private scroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
  }

  goCard(id) {
    this.router.navigate([], { fragment: id });
  }

}
