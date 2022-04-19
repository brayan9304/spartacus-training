import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductListOutlets, ProductDetailOutlets } from '@spartacus/storefront';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  
  products$ = this.tcProductCompareFacade.getProductsToCompare(true).pipe(
    map(products => products.map(product => of(product)))
  )

  constructor(protected tcProductCompareFacade: TcProductCompareFacade) { }

  ngOnInit(): void {
    this.tcProductCompareFacade.loadProducts();
  }

}
