import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';

@Component({
  selector: 'tc-compare-button',
  templateUrl: './tc-compare-button.component.html',
  styleUrls: ['./tc-compare-button.component.scss'],
})
export class TcCompareButtonComponent implements OnInit {

  @Input() product: Product;

  productInCompare: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCompare(){
    this.productInCompare = !this.productInCompare;
    console.log(this.product);
  }

}
