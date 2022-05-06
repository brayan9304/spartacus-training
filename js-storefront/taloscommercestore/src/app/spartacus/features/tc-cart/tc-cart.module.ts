import { NgModule } from '@angular/core';
import { TcCartComponentsModule } from './components/tc-cart-components.module';
import { TcCartCoreModule } from './core';
import { TcCartOccModule } from './occ';



@NgModule({
  declarations: [],
  imports: [ TcCartCoreModule, TcCartOccModule, TcCartComponentsModule ]
})
export class TcCartModule { }
