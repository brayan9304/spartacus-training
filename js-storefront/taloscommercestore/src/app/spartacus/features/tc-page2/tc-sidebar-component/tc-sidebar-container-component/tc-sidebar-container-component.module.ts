import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSidebarContainerComponent } from './tc-sidebar-container-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcSidebarContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SidebarContainer: {
          component: TcSidebarContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcSidebarContainerComponent],
  exports: [TcSidebarContainerComponent],
})
export class TcSidebarContainerModule { }
