import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActiveCartService, Cart, OrderEntry } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  Router,
} from '@angular/router';
import { TcCartStateService } from '../../core/services/tc-cart-state.service';

@Component({
  selector: 'tc-cart-totals',
  templateUrl: './tc-cart-totals.component.html',
  styleUrls: ['./tc-cart-totals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcCartTotalsComponent implements OnInit, OnDestroy {
  cart$: Observable<Cart>;
  entries$: Observable<OrderEntry[]>;
  cartValidationInProgress = false;

  protected subscription = new Subscription();

  /**
   * @deprecated since 4.2
   */
  constructor(activeCartService: ActiveCartService,
              tcCartStateService: TcCartStateService);

  constructor(
    protected activeCartService: ActiveCartService,
    protected tcCartStateService: TcCartStateService,
    protected router?: Router,
  ) {}

  changeSelectProducts() {
    this.tcCartStateService.changeProductsSelect();
  }

  get productsSelect(): Observable<boolean> {
    return this.tcCartStateService.productsSelect$;
  }

  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
    this.entries$ = this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));

    this.subscription.add(
      this.router?.events.subscribe((event: Event) => {
        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.cartValidationInProgress = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  disableButtonWhileNavigation(): void {
    this.cartValidationInProgress = true;
  }
}