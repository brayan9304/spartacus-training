import { Component, OnInit } from '@angular/core';
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
  constructor(private componentData: CmsComponentData<TcSidebarLink>) {}

  ngOnInit(): void {}

  onClick(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'}), 0);
    }
  }

}
