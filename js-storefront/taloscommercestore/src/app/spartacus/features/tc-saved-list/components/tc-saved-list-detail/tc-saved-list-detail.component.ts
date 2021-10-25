import { Component, OnInit } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { Observable } from 'rxjs';
import { SavedListDetail } from '../../core';
import { Product } from '@spartacus/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';


@Component({
  selector: 'tc-saved-list-detail',
  templateUrl: './tc-saved-list-detail.component.html',
  styleUrls: ['./tc-saved-list-detail.component.scss'],
})
export class TcSavedListDetailComponent implements OnInit {

  iconTypes = ICON_TYPE;
  products: Product[] = [];
  savedlistDetail$: Observable<SavedListDetail>;
  queryString = window.location.search;
  urlParams = new URLSearchParams(this.queryString);
  listId = this.urlParams.get('listId');
  product$: Observable<Product> = this.currentProductService.getProduct();
  imageProductFormat: number = 2;

  constructor(
    protected tcSavedListDetailFacade: TcSavedListFacade,
    protected currentProductService: CurrentProductService
  ) {}

  ngOnInit(): void {
    this.savedlistDetail$ = this.tcSavedListDetailFacade.getSavedListDetail(true, this.listId);
    this.savedlistDetail$.subscribe((detail) => (this.products = detail.products));
    //this.savedlistDetail$.subscribe((detail) => console.log(detail));
    //this.tcSavedListDetailFacade.addProduct("Test 2", "137220");
    //this.tcSavedListDetailFacade.deleteProduct("00000000", "3357888")
  }

  handleDeleteProductAction(listId: string, productCode: string): void {
    this.tcSavedListDetailFacade.deleteProduct(listId, productCode);
  }
}
