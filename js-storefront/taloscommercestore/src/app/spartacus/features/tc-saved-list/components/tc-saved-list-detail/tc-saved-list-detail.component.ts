import { Component, OnDestroy, OnInit } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { Observable, Subscription } from 'rxjs';
import { SavedListDetail } from '../../core';
import { CurrentProductService } from '@spartacus/storefront';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tc-saved-list-detail',
  templateUrl: './tc-saved-list-detail.component.html',
  styleUrls: ['./tc-saved-list-detail.component.scss'],
})
export class TcSavedListDetailComponent implements OnInit, OnDestroy {
  detail$: SavedListDetail;
  imageProductFormat: number = 2;
  subscription: Subscription;
  loading$: Observable<boolean> = this.tcSavedListDetailFacade.getSavedListDetailResultLoading();
  success$: Observable<boolean> = this.tcSavedListDetailFacade.getSavedListDetailResultSuccess();
  error$: Observable<boolean> = this.tcSavedListDetailFacade.getSavedListDetailResultError();


  constructor(
    protected tcSavedListDetailFacade: TcSavedListFacade,
    protected currentProductService: CurrentProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(map((params) => params.listId)).subscribe((listId) => {
      if(listId){
       this.subscription = this.tcSavedListDetailFacade.getSavedListDetail(true, listId).subscribe((detail) => (this.detail$ = detail));
      }
    });
  }

  handleDeleteProductAction(listId: string, productCode: string): void {
    this.tcSavedListDetailFacade.deleteProduct(listId, productCode);
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
    location.reload();
  }
}
