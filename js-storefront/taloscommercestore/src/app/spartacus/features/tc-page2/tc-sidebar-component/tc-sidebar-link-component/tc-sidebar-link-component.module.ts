import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSidebarLinkComponent } from './tc-sidebar-link-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcSidebarLinkComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SidebarLink: {
          component: TcSidebarLinkComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcSidebarLinkComponent],
  exports: [TcSidebarLinkComponent],
})
export class TcSidebarLinkModule { }
