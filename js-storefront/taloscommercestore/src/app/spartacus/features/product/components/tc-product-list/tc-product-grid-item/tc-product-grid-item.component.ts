import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProductListOutlets } from '@spartacus/storefront';
import { ProductListItemContextSource } from '@spartacus/storefront';
import { ProductListItemContext } from '@spartacus/storefront';

@Component({
  selector: 'cx-product-grid-item',
  templateUrl: './tc-product-grid-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class TcProductGridItemComponent implements OnChanges {
  readonly ProductListOutlets = ProductListOutlets;
  @Input() product: any;

  constructor(
    protected productListItemContextSource: ProductListItemContextSource
  ) {}

  ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.product) {
      this.productListItemContextSource.product$.next(this.product);
    }
  }
}
