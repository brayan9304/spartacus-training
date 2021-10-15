import { Component, OnInit } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { Observable } from 'rxjs';
import { SavedListDetail } from '../../core';
import { CmsService, Product } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';


@Component({
  selector: 'tc-saved-list-detail',
  templateUrl: './tc-saved-list-detail.component.html',
  styleUrls: ['./tc-saved-list-detail.component.scss'],
})
export class TcSavedListDetailComponent implements OnInit {

  products: Product[] = [];
  savedlistDetail$: Observable<SavedListDetail> = this.tcSavedListDetailFacade.getSavedListDetail(true, "00000000");
  constructor(protected tcSavedListDetailFacade: TcSavedListFacade, private cmsService: CmsService, private componentData: CmsComponentData<any>) {}

  ngOnInit(): void {
    this.savedlistDetail$.subscribe(detail => this.products = detail.products);
    this.tcSavedListDetailFacade.addProduct("Test 1", "1776948");
    //this.tcSavedListDetailFacade.deleteProduct("00000000", "1776948")

  }


}
