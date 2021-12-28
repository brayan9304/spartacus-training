import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSidebarContainerComponent } from './tc-sidebar-container-component.component';
import { GenericLinkModule, IconModule, MediaModule, PageComponentModule, PageSlotModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/spartacus/material/material.module';



@NgModule({
  declarations: [TcSidebarContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    GenericLinkModule,
    I18nModule,
    MaterialModule,
    PageSlotModule,
    PageComponentModule,
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
