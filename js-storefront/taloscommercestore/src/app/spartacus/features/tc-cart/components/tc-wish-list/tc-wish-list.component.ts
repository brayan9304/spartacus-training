import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderEntry, PromotionLocation, ActiveCartService, SelectiveCartService, UserIdService, MultiCartService, ConsignmentEntry } from '@spartacus/core';
import { CartItemComponentOptions } from '@spartacus/storefront';
import { Subscription, Observable } from 'rxjs';
import { startWith, tap, map } from 'rxjs/operators';
import { TcCartStateService } from '../../core/services/tc-cart-state.service';
import { TcCartFacade } from '../../root';

@Component({
  selector: 'tc-wish-list',
  templateUrl: './tc-wish-list.component.html',
  styleUrls: ['./tc-wish-list.component.scss']
})
export class TcWishListComponent implements OnInit, OnDestroy {
  protected subscription = new Subscription();
  protected userId: string;

  @Input() readonly: boolean = false;

  @Input() hasHeader: boolean = true;

  @Input() options: CartItemComponentOptions = {
    isSaveForLater: true,
    optionalBtn: null,
  };

  @Input() cartId: string;

  protected _items: OrderEntry[] = [];
  form: FormGroup = new FormGroup({});

  @Input('items')
  set items(items: OrderEntry[]) {
    this._items = items;
    this.createForm();
  }
  get items(): OrderEntry[] {
    return this._items;
  }

  @Input() promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  @Input('cartIsLoading') set setLoading(value: boolean) {
    if (!this.readonly) {
      // Whenever the cart is loading, we disable the complete form
      // to avoid any user interaction with the cart.
      value
        ? this.form.disable({ emitEvent: false })
        : this.form.enable({ emitEvent: false });
    }
  }

  constructor(
    protected activeCartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService,
    protected userIdService: UserIdService,
    protected multiCartService: MultiCartService,
    protected tcCartStateService: TcCartStateService,
    protected tcCartFacade: TcCartFacade
  ) {}

  get productsSelect(): Observable<boolean> {
    return this.tcCartStateService.productsSelect$;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.userIdService
        ?.getUserId()
        .subscribe((userId) => (this.userId = userId))
    );
  }

  /**
   * Creates form models for list items
   */
  protected createForm(): void {
    this._items.forEach((item) => {
      const controlName = this.getControlName(item);
      const group = new FormGroup({
        quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
      });

      this.form.addControl(controlName, group);

      // If we disable form group before adding, disabled status will reset
      // Which forces us to disable control after including to form object
      if (!item.updateable || this.readonly) {
        this.form.controls[controlName].disable();
      }
    });
  }

  protected getControlName(item: OrderEntry): string {
    return item.product.code.toString();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}