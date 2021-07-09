import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TcReferredCustomerFacade } from '../../root';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../core';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
  selector: 'tc-referred-customer-list',
  templateUrl: './tc-referred-customer-list.component.html',
  styleUrls: ['./tc-referred-customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcReferredCustomerListComponent implements OnInit {
  iconTypes = ICON_TYPE;
  showAddReferredCustomerForm = false;
  showEditReferredCustomerForm = false;
  referredCustomers$: Observable<ReferredCustomer[]> = this.tcReferredCustomerFacade.getReferredCustomers(true);
  loading$: Observable<boolean> = this.tcReferredCustomerFacade.getReferredCustomersResultLoading();
  success$: Observable<boolean> = this.tcReferredCustomerFacade.getReferredCustomersResultSuccess();
  error$: Observable<boolean> = this.tcReferredCustomerFacade.getReferredCustomersResultError();
  currentReferredCustomer: ReferredCustomer;

  constructor(protected tcReferredCustomerFacade: TcReferredCustomerFacade) {}

  ngOnInit(): void {}

  handleAddReferredCustomerAction(): void {
    this.showEditReferredCustomerForm = false;
    this.showAddReferredCustomerForm = true;
  }

  addReferredCustomerCancel(): void {
    this.showAddReferredCustomerForm = false;
  }

  handleEditReferredCustomerAction(referredCustomer: ReferredCustomer): void {
    this.showAddReferredCustomerForm = false;
    this.showEditReferredCustomerForm = true;
    this.currentReferredCustomer = referredCustomer;
  }

  addReferredCustomerSubmit(referredCustomer: ReferredCustomer): void {
    this.showAddReferredCustomerForm = false;
    this.tcReferredCustomerFacade.addReferredCustomer(referredCustomer);
  }

  editReferredCustomerSubmit(referredCustomer: ReferredCustomer): void {
    this.showEditReferredCustomerForm = false;
    /*this.service.updateReferredCustomer(this.currentReferredCustomer['email'], referredCustomer);*/
  }

  editReferredCustomerCancel(): void {
    this.showEditReferredCustomerForm = false;
  }
}
