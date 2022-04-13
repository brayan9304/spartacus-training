import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProductListOutlets, ProductDetailOutlets } from '@spartacus/storefront';
import { ProductListItemContextSource } from '@spartacus/storefront';
import { ProductListItemContext } from '@spartacus/storefront';

@Component({
  selector: 'cx-product-list-item',
  templateUrl: './tc-product-list-item.component.html',
  styleUrls: ['./tc-product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class TcProductListItemComponent implements OnChanges {
  readonly ProductListOutlets = ProductListOutlets;
  readonly ProductDetailOutlets = ProductDetailOutlets;
  @Input() product: any;

  constructor(
    protected productListItemContextSource: ProductListItemContextSource
  ) {}

  ngOnChanges(changes?: SimpleChanges): void {
    console.log(changes?.product);
    
    if (changes?.product) {
      this.productListItemContextSource.product$.next(this.product);
    }
  }
}
