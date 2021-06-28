import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TcReferredCustomerFacade } from '../../root';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../core/model';

@Component({
  selector: 'tc-referred-customer-list',
  templateUrl: './tc-referred-customer-list.component.html',
  styleUrls: ['./tc-referred-customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcReferredCustomerListComponent implements OnInit {
  referredCustomers$: Observable<ReferredCustomer[]> = this.tcReferredCustomerFacade.getReferredCustomers();

  constructor(protected tcReferredCustomerFacade: TcReferredCustomerFacade) {}

  ngOnInit(): void {}
}
