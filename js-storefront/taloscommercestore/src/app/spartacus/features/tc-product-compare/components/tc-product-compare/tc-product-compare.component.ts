import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductListOutlets, ProductDetailOutlets } from '@spartacus/storefront';
import { TcProductCompareFacade } from '../../root';

@Component({
  selector: 'tc-product-compare',
  templateUrl: './tc-product-compare.component.html',
  styleUrls: ['./tc-product-compare.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcProductCompareComponent implements OnInit {
  readonly ProductListOutlets = ProductListOutlets;
  readonly ProductDetailOutlets = ProductDetailOutlets;
  
  products$ = this.tcProductCompareFacade.getProductsToCompare(true);

  constructor(protected tcProductCompareFacade: TcProductCompareFacade) { }

  ngOnInit(): void {
    this.tcProductCompareFacade.loadProducts();
  }

}
