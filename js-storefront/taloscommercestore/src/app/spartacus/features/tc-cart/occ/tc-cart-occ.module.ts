import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { OccTcCartAdapter } from './adapters';
import { tcOccCartConfig } from './config';
import { TcCartAdapter, CART_NORMALIZER } from '../core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(tcOccCartConfig),
    { provide: TcCartAdapter, useClass: OccTcCartAdapter },
  ],
})
export class TcCartOccModule {}
