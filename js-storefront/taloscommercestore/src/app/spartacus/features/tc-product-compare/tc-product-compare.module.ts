import { NgModule } from '@angular/core';
import { TcProductCompareComponentsModule } from './components/tc-product-compare-components.module';
import { TcProductCompareAdapter, TcProductCompareCoreModule } from './core';



@NgModule({
  declarations: [],
  imports: [
    TcProductCompareComponentsModule,
    TcProductCompareCoreModule
  ]
})
export class TcProductCompareModule { }
