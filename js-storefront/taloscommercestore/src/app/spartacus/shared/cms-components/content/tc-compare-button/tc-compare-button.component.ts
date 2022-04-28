import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { TcProductCompareFacade } from 'src/app/spartacus/features/tc-product-compare/root';

@Component({
  selector: 'tc-compare-button',
  templateUrl: './tc-compare-button.component.html',
  styleUrls: ['./tc-compare-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcCompareButtonComponent implements OnInit {

  @Input() product: Product;

  productInCompare$: Observable<Product[]>;

  constructor(protected tcProductCompareFacade: TcProductCompareFacade) { }

  ngOnInit(): void {
    this.productInCompare$ = this.tcProductCompareFacade.getProductByCode(this.product.code);
  }

  addProductToCompare(){
    this.tcProductCompareFacade.addProductsToCompare( this.product );
  }

  deleteProductToCompare(){
    this.tcProductCompareFacade.deleteProductToCompare( this.product.code );
  }

}
