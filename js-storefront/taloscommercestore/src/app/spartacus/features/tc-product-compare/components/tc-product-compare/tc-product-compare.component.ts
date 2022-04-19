import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { TcProductCompareFacade } from '../../root';

@Component({
  selector: 'tc-product-compare',
  templateUrl: './tc-product-compare.component.html',
  styleUrls: ['./tc-product-compare.component.scss']
})
export class TcProductCompareComponent implements OnInit {

  constructor(protected tcProductCompareFacade: TcProductCompareFacade) { }

  ngOnInit(): void {
    this.tcProductCompareFacade.loadProducts();

    let product: Product = {
      code: "514518",
      name: "ACK-E2",
      price: {
        currencyIso: "USD",
        formattedValue: "$315.52",
        value: 315.52
      },
      stock: {
        stockLevelStatus: "inStock"
      },
      summary: "ACK-E2 AC Adapter Kit",
      slug: "ack-e2",
      nameHtml: "ACK-E2"
    };

    this.tcProductCompareFacade.addProductsToCompare( product );

    
  }

}
