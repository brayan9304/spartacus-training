import { Component, OnInit } from '@angular/core';
import {
  ActiveCartService,
  Cart,
  CmsParagraphComponent,
  CmsService,
  OrderEntry,
  PromotionLocation,
  SelectiveCartService,
} from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { TcCartService } from '../../core';
@Component({
  selector: 'tc-save-for-later',
  templateUrl: './tc-save-for-later.component.html',
  styleUrls: ['./tc-save-for-later.component.scss']
})
export class TcSaveForLaterComponent implements OnInit {
  saveForLater$: Observable<Cart>;
  cart$: Observable<Cart>;
  entries$: Observable<OrderEntry[]>;
  cartLoaded$: Observable<boolean>;
  data$: Observable<CmsParagraphComponent>;
  isCartEmpty$: Observable<boolean>;
  CartLocation = PromotionLocation;

  constructor(
    protected cmsService: CmsService,
    protected cartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService,
    protected tcCartService: TcCartService
  ) {}

  ngOnInit() {
    this.isCartEmpty$ = this.cartService
      .getActive()
      .pipe(map((cart) => !(cart && cart.totalItems && cart.totalItems > 0)));
    this.saveForLater$ = this.selectiveCartService.getCart();
    this.entries$ = this.selectiveCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0),
      tap(elements => {console.log(elements);
      }));
    this.entries$ = this.tcCartService
      .getSavedForLater()
      .pipe(filter((entries) => entries.length > 0),
      tap(elements => {console.log(elements);
      }));
    this.cartLoaded$ = combineLatest([
      this.cartService.isStable(),
      this.selectiveCartService.isStable(),
    ]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
    this.data$ = this.cmsService.getComponentData(
      'EmptyCartParagraphComponent'
    );
  }

  moveToCart(item: OrderEntry) {
    this.selectiveCartService.removeEntry(item);
    this.cartService.addEntry(item.product.code, item.quantity);
  }
}
