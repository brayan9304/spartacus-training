import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { TcProductCompareFacade } from 'src/app/spartacus/features/tc-product-compare/root';

@Component({
  selector: 'tc-compare-button',
  templateUrl: './tc-compare-button.component.html',
  styleUrls: ['./tc-compare-button.component.scss'],
})
export class TcCompareButtonComponent implements OnInit {

  @Input() product: Product;

  productInCompare: boolean = false;

  constructor(protected tcProductCompareFacade: TcProductCompareFacade) { }

  ngOnInit(): void {
  }

  addProductToCompare(){
    if (!this.productInCompare) {
      this.tcProductCompareFacade.addProductsToCompare( this.product );
    } else{
      this.tcProductCompareFacade.deleteProductToCompare( this.product.code );
    }
    this.productInCompare = !this.productInCompare;
  }

}
